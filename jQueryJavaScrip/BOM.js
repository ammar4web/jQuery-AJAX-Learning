$("#goBottom").click(function () {
  $("html, body").animate({ scrollTop: $(document).height() }, 3000);
  return false;
});
//
$("#goTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
  return false;
  //
  $(document).contextmenu(function () {
    return false;
  });
});
