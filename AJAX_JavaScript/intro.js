$(function () {
  $("#load").click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/todos",
      type: "GET",
      dataType: "json",
      success: function (json, status) {
        console.log(status);
        console.log(json);

        let todos = "";
        $.each(json, function (key, value) {
          todos += "<tr>";
          todos += "<td>" + value.id + "</td>";
          todos += "<td>" + value.userId + "</td>";
          todos += "<td>" + value.title + "</td>";
          todos += "<td>" + value.completed + "</td>";
          todos += "</tr>";
        });
        $("#todos").append(todos);
      },
      error: function (result, status, error) {
        console.log("Cannot load data");
      },
      complete: function (result, status) {
        console.log("loading complated!");
      },
    });
  });
});
