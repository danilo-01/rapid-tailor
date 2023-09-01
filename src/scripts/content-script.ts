console.log("this is loaded for sure for sure");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.action);
  console.log("injecting ");

  if (request.action === "injectComponent") {
    fetch(chrome.runtime.getURL("asset-manifest.json"))
      .then((response) => response.json())
      .then((manifest) => {
        const mainJsFile = manifest.files["main.js"];

        injectReactApp(mainJsFile);
      });
  }
});

function injectReactApp(mainJsFile) {
  const hostDiv = document.createElement("div");

  // Attach a shadow root to the hostDiv
  const shadowRoot = hostDiv.attachShadow({ mode: "open" });

  const rootDiv = document.createElement("div");
  rootDiv.id = "my-react-root";

  // Add inline styles to make the rootDiv stick to the right side and appear above everything else.
  rootDiv.style.position = "fixed"; // Fix position regardless of scrolling.
  rootDiv.style.top = "0"; // Start from the top.
  rootDiv.style.right = "0"; // Stick to the right side.
  rootDiv.style.width = "30rem"; // Or whatever width you desire.
  rootDiv.style.height = "100vh"; // Take up the full height of the viewport.
  rootDiv.style.zIndex =
    "99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"; // High zIndex to make it appear above most other page elements.
  rootDiv.style.backgroundColor = "rgba(255,255,255,0.9)"; // Give it a slightly opaque white background. Adjust as necessary.
  rootDiv.style.overflowY = "auto"; // Add scroll if the content is longer than the viewport.

  // Append the rootDiv to the shadow root
  shadowRoot.appendChild(rootDiv);

  // Append React built JS file to the shadow root
  const jsScript = document.createElement("script");
  jsScript.src = chrome.runtime.getURL(mainJsFile);
  shadowRoot.appendChild(jsScript);

  // Finally, append the hostDiv (which contains the shadow root) to the body
  document.body.appendChild(hostDiv);
}
// let init: undefined | Function = undefined;
// if (typeof init === "undefined") {
//   init = function () {
//     const injectelement = document.createElement("div");
//     injectelement.innerHTML = "DUMMY TEXT";
//     document.body.appendChild(injectelement);
//   };
//   init();
