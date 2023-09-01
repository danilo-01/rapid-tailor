import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { MainHeader } from "./components";
import ViewSwitch from "./components/views";
import {
  popupcontextInterface,
  viewType,
  documentInterface,
  serviceWorkgerRequestGenerate,
  serviceWorkerActions,
} from "./models";
import NavigationTabs from "./components/navigation-tabs";
import { jobDescriptionActions } from "./models/popup-context-interface";

export const Popupcontext = React.createContext<popupcontextInterface | null>(
  null
);

const Popup: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<viewType>("GENERATE");
  const [resumeStatus, setResumeStatus] = useState<documentInterface>({
    selected: false,
  });
  const [confirmedGenerate, setConfirmedGenerate] = useState(false);
  const [coverLetterStatus, setCoverLetterStatus] = useState<documentInterface>(
    {
      selected: false,
    }
  );
  const [targetJobDescription, setTargetJobDescription] = useState<{
    text: string;
  }>({
    text: "",
  });

  const handleUpdateTargetJobDescription = useCallback(
    (action: jobDescriptionActions, selectedText = "") => {
      switch (action) {
        case "ADD":
          setTargetJobDescription((prev: any) => ({
            text: prev.text + " " + selectedText,
          }));
          break;
        case "RESET":
          setTargetJobDescription((prev: any) => ({
            text: selectedText,
          }));
          break;
        case "DELETE":
          setTargetJobDescription((prev: any) => ({
            text: "",
          }));
          break;
      }
    },
    []
  );

  const handleStateUpdate = useCallback(
    (setState: React.Dispatch<React.SetStateAction<any>>, newState: any) => {
      // Updates a state with new values, only works if the state is an object
      setState((prev: any) => ({ ...prev, ...newState }));
    },
    []
  );
  const handleServiceWorkerRequest = useCallback(
    (target: serviceWorkerActions) => {
      // Check the target action for the request
      switch (target) {
        case "GENERATE_DOCUMENTS":
          // Construct the payload based on the current state
          const payload: serviceWorkgerRequestGenerate = {
            action: "GENERATE_DOCUMENTS",
            agreedToTOS: confirmedGenerate,
            targetJobDescription: targetJobDescription,
            resumeStatus: resumeStatus,
            coverLetterStatus: coverLetterStatus,
          };

          // If the service worker is registered and active, send the payload
          if (navigator.serviceWorker && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage(payload);
          }
          break;
      }
    },
    [confirmedGenerate, coverLetterStatus, resumeStatus, targetJobDescription]
  );
  const handleServiceWorkerResponse = useCallback(() => {
    console.log("Response from Service Worker");
  }, []);

  return (
    <Popupcontext.Provider
      value={{
        coverLetterStatus,
        setCoverLetterStatus,
        resumeStatus,
        setResumeStatus,
        targetJobDescription,
        setTargetJobDescription,
        handleStateUpdate,
        confirmedGenerate,
        setConfirmedGenerate,
        handleServiceWorkerRequest,
        handleUpdateTargetJobDescription,
      }}
    >
      <PopupWrapper id="rapid-tailor-wrapper">
        <MainHeader credits={100} />
        <NavigationTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <ViewSwitch view={currentTab} />
      </PopupWrapper>
    </Popupcontext.Provider>
  );
};

export default Popup;

const PopupWrapper = styled.div`
  width: 30rem;
  height: 100%;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  user-select: none;
`;
