$("#selectBtn").click(function () {
  // $("input[type=checkbox]").prop("checked", true);
  $("input[type=checkbox]").attr("checked", "checked");
  $(this).attr("disabled", "disabled");
});

$("#deselectBtn").click(function () {
  // $("input[type=checkbox]").prop("checked", false);
  $("input[type=checkbox]").removeAttr("checked", "checked");
  $(this).attr("disabled", "disabled");
});

$("#languages").change(function () {
  let selectLang = $("#languages").find(":selected").val();
  if (selectLang != "") {
    $(".select-section").children("p").text(selectLang);
    console.log(selectLang);
  } else {
    $(".select-section").children("p").text(selectLang);
  }
});