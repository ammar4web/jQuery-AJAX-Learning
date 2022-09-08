// XMLHttpRequest(): Request Object
let myRequest = new XMLHttpRequest();

// .onreadystatechange = function () {}
// On Ready State Change (.readyState)

myRequest.onreadystatechange = function () {
  /* 
    Ready state: (status of Requsert)
    [0] Request Not Initialized
    [1] Server Connection Established
    [2] Request Recieved
    [3] Processing Request
    [4] Request is Finished and Response is Ready

    Status => Response Status Code
    [200] ok | [404] Not found | ...
   */
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

// XMLHttpRequest().open("Method", "URL", Async, User, Password)
// User, Password (optinal)
// Async غير متزامن
myRequest.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
myRequest.send();
