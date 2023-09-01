try {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("sending hopefully", changeInfo.status);
    if (
      changeInfo.status === "complete" &&
      tab.id &&
      tab.url &&
      !tab.url.startsWith("chrome://")
    ) {
      chrome.scripting.executeScript({
        files: ["scripts/content-script.js"],
        target: { tabId: tab.id },
      });
    }
  });

  chrome.action.onClicked.addListener((tab) => {
    console.log("sending message to inject the script");
    if (tab.id && tab.url && !tab.url.startsWith("chrome://")) {
      chrome.tabs.sendMessage(tab.id, { action: "injectComponent" });
    }
  });

  // Listen for messages from other parts of the extension
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Check the action field in the message
    if (message.action === "GENERATE_DOCUMENTS") {
      // Handle the "generate" action
      console.log(message);
      // Optionally, send a response back
      sendResponse({ status: "success" });
    }
  });
} catch (e) {
  console.log(e);
}
