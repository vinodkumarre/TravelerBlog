const APIENDPOINT = "http://localhost:3002";
const ApiFetchCall = (url, method, reguestSucces, body, headers) => {
  fetch(APIENDPOINT + url, {
    method,
    body,
    headers,
  }).then((response) => {
    if (method === "Get") {
      return response.json();
    }
    return response;
  }).then(reguestSucces);
};
export default ApiFetchCall;
