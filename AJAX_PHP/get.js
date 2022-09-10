function getRepos() {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      $("body").append(this.responseText);
    }
  };
  myRequest.open("GET", "auth.php?name=ammar", true);
  myRequest.send();
}
