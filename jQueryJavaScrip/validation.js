$("#myForm").validate({
  rules: {
    userName: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    agree: {
      required: true,
    },
  },
});
