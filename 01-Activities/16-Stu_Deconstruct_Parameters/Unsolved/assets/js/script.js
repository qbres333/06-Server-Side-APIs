fetch(
  // Explain each parameter in comments below.

  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation (for URL)
  // open 10 issues
  // only fetches issues with "open" status
  // sort by date created
  // sort dates in descending order (newest to oldest)

/* bonus 

Query strings are a way to pass information to a web server through the URL. 
They are typically used to send data from the client (e.g., a web browser) 
to the server, often to request specific information or to provide input 
parameters to a web service or API.

A query string is the part of a URL that starts after a question mark (?). 
It consists of one or more key-value pairs, where each key-value pair is 
separated by an ampersand (&). The key and value within each pair are 
separated by an equals sign (=).

*/

