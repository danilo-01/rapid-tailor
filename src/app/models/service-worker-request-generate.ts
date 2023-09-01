import { serviceWorkerActions } from "./index";

interface serviceWorkgerRequestGenerate {
  action: serviceWorkerActions;
  targetJobDescription: {
    text: string;
  };
  resumeStatus: {
    selected: boolean;
  };
  coverLetterStatus: {
    selected: boolean;
  };
  agreedToTOS: boolean;
}

export default serviceWorkgerRequestGenerate;
