chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const jobDescriptionElement = document.getElementById("job-details");
  const jobDescription = jobDescriptionElement
    ? jobDescriptionElement.innerText
    : "some description";
  console.log("Job description:", jobDescription);
  if (request === "getJobDescription") {
    sendResponse({ jobDescription });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message);
  // Do something with the message...
});
