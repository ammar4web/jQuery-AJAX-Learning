function getRepos() {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      $("body").append(this.responseText);
    }
  };
  myRequest.open("POST", "auth.php", true);
  myRequest.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );
  myRequest.send("name=Ammar&age=23");
}
