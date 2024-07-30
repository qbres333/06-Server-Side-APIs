const requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// requires a config object {}
// take a reqwuest URL and method
// .then method requires a handler function
// logs response in the console
$.ajax({  //this is the object
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// takes a request URL
// finds data from the server

fetch(requestUrl)
  .then(function (response) { // wait for server response
    return response.json();  //return the response as JOSN
  })
  .then(function (data) {
    // log the data to the console
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
const xhr = new XMLHttpRequest();

// this function is what to do with the response from the server
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
// open a new the request to the server
xhr.open('GET', requestUrl);

// send the request to the server
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
