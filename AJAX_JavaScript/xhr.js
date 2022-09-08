// xhr: XML Http Request
let myRequest = new XMLHttpRequest();

// On Ready State Change (.readyState)
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // responseText
    // console.log(this.responseText);
    let myJsObject = JSON.parse(this.responseText),
      MyText = "";

    for (let Object of myJsObject) {
      // console.log(Object.id, Object.userId);
      MyText += "<tr>";
      MyText += "<td>" + Object.id + "</td>";
      MyText += "<td>" + Object.userId + "</td>";
      MyText += "<td>" + Object.title + "</td>";
      MyText += "<td>" + Object.completed + "</td>";
      MyText += "</tr>";
    }
    $("tbody").append(MyText);
  }
};

// XMLHttpRequest().open("Method", "URL", Async, User, Password)
myRequest.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
myRequest.send();
