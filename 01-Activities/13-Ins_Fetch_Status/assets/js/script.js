const requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
const responseText = document.getElementById('response-text');
// get status codes and use properties within response object
function getApi(requestUrlArg) {
  fetch(requestUrlArg).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

getApi(requestUrl);
