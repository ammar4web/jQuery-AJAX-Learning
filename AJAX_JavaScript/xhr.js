// xhr: XML Http Request
let myRequest = new XMLHttpRequest();

// On Ready State Change (.readyState)
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // responseText
    console.log(this.responseText);
  }
};

// XMLHttpRequest().open("Method", "URL", Async, User, Password)
myRequest.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
myRequest.send();
