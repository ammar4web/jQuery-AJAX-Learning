$(function () {
  $("#load").click(function () {
    $.ajax({
      url: "../JSON/try.json",
      type: "GET",
      dataType: "json",
      cache: false,
      success: function (data, status) {
        console.log("loaded Success!");
        console.log(status);
        console.log(data);

        let todos = "";
        $.each(data, function (key, value) {
          todos += "<tr>";
          todos += "<td>" + value.userName + "</td>";
          todos += "<td>" + value.Age + "</td>";
          todos += "</tr>";
        });
        $("#todos").append(todos);
      },
      error: function (xhr, status, error) {
        console.log("Cannot load data");
        console.log(xhr);
        console.log(status);
        console.log(error);
      },
      complete: function (xhr, status) {
        console.log("-----");
        console.log("loading complated!");
        console.log(xhr);
        console.log(status);
      },
    });
  });
});
