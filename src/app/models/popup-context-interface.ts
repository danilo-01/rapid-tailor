import documentInterface from "./document-interface";
import serviceWorkerActions from "./service-worker-actions";

export type jobDescriptionActions = "ADD" | "RESET" | "DELETE";

interface popupcontextInterface {
  targetJobDescription: {
    text: string;
  };
  setTargetJobDescription: React.Dispatch<
    React.SetStateAction<{
      text: string;
    }>
  >;
  resumeStatus: {
    selected: boolean;
  };
  setResumeStatus: React.Dispatch<React.SetStateAction<documentInterface>>;
  coverLetterStatus: {
    selected: boolean;
  };
  setCoverLetterStatus: React.Dispatch<React.SetStateAction<documentInterface>>;
  handleStateUpdate: (
    setState: React.Dispatch<React.SetStateAction<any>>,
    newState: any
  ) => void;
  confirmedGenerate: boolean;
  setConfirmedGenerate: React.Dispatch<React.SetStateAction<boolean>>;
  handleServiceWorkerRequest: (target: serviceWorkerActions) => void;
  handleUpdateTargetJobDescription: (
    action: jobDescriptionActions,
    selectedText?: string
  ) => void;
}

export default popupcontextInterface;
