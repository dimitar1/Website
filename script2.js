$("#regForm").validate({
  rules: {
    "fullname":{
      required: true,
      minlength: 3
    },
    "username": {
      required: true,
      minlength: 6,
      maxlength: 20
    },
    "password": {
      required: true,
      minlength: 6,
      passDigit: true
    },

    "confirmpassword": {
      equalTo: "#password"
    },

    "email": {
      required: true,
      email: true
    },

    "agree": {
      required: true
    }
  }
});