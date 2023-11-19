function login() {
  let loginemail = document.getElementById("loginemail").value;
  let loginpassword = document.getElementById("loginpassword").value;
  console.log("email", loginemail);
  console.log("password", loginpassword);

  if (loginemail == "" || loginemail == null) {
    alert("Email is required for login.");
    return;
  }
  if (loginpassword == "" || loginpassword == null) {
    alert("password is required for login.");
    return;
  }

  const allUser = JSON.parse(localStorage.getItem("users"));
  console.log(allUser);

  let emailExist = allUser.find(({ email }) => email === loginemail);
  console.log("Email exist: ", emailExist);

  if (emailExist == undefined) {
    Swal.fire({
      title: "Invalid Email",
      text: "That email address is not exist in user array.\r\nPlease try again.",
      icon: "error",
      confirmButtonText: "Ok",
    });
  } else {
    if (emailExist.password == loginpassword) {
      setTimeout(() => {
        Swal.fire({
          title: "Login Successfully",
          text: "Dear User, You have been successfully login.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      });
      localStorage.setItem("userlogin", emailExist.email);

      location.href = "dashboard.html";
    } else {
      Swal.fire({
        title: "Incorrect Password",
        text: "That password is not exist in user array. Please try again.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }
}
document.getElementById("loginForm").addEventListener("click", login);
