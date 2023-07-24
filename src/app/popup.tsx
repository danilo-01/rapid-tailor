import React, { useState } from "react";
import styled from "styled-components";
import { MainHeader } from "./components";
import ViewSwitch from "./components/views";
import { viewType } from "./models";
import NavigationTabs from "./components/navigation-tabs";

const Popup: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<viewType>("GENERATE");
  return (
    <PopupWrapper>
      <MainHeader credits={100} />
      <NavigationTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <ViewSwitch view={currentTab} />
    </PopupWrapper>
  );
};

export default Popup;

const PopupWrapper = styled.div`
  width: 30rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  user-select: none;
`;
