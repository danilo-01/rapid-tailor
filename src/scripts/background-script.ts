console.log("im running in the backgorund");

chrome.runtime.onInstalled.addListener(async () => {
  try {
    // Register content scripts
    chrome.scripting.registerContentScripts([
      {
        id: "something",
        matches: ["<all_urls>"],
        js: ["scripts/content-script.js"],
      },
    ]);
    console.log("Content script registered");
  } catch (error) {
    console.error("Error registering content script:", error);
  }
});
