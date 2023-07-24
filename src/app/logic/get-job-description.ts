export default function getJobDesctiption() {
  const jobDescriptionElement = document.getElementById("job-details");
  const jobDescription = jobDescriptionElement
    ? jobDescriptionElement.innerText
    : "some description";
  return jobDescription;
}
