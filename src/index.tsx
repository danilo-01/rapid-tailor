import React from "react";
import ReactDOM from "react-dom/client";

import Popup from "./app/popup";
import { StyleSheetManager } from "styled-components";

(() => {
  const injectedDiv = document.querySelector("body > div:last-child");
  if (!injectedDiv || !injectedDiv.shadowRoot) {
    console.error("Failed to find the injected div or its shadow root.");
    // Handle this error appropriately
    return;
  }

  const reactRoot = injectedDiv.shadowRoot.getElementById("my-react-root");
  if (!reactRoot) {
    console.error("Failed to find the React root within the shadow DOM.");
    // Handle this error appropriately
    return;
  }

  const root = ReactDOM.createRoot(reactRoot as HTMLElement);

  root.render(
    <React.StrictMode>
      <StyleSheetManager
        target={injectedDiv.shadowRoot as unknown as HTMLElement}
      >
        <Popup />
      </StyleSheetManager>
    </React.StrictMode>
  );
})();
