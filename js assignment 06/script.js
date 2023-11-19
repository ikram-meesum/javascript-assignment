let users = [];

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  if (username == "" || username == null) {
    alert("Please type username for authentication.");
    return;
  }
  if (email == "" || email == null) {
    alert("Please type valid email for authentication.");
    return;
  }
  if (password == "" || password == null) {
    alert("Enter correct password.");
    return;
  }
  users.push({ username, email, password });
  console.log(users);

  Swal.fire({
    title: "User created! Do you want to create some other users?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `No, Goto login page`,
  }).then((result) => {
    if (result.isConfirmed) {
      //Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      var x = document.getElementById("textsignup");
      let logindiv = document.getElementById("loginDiv");
      x.style.display = "none";
      logindiv.style.display = "block";
    }
  });
}

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

  let emailExist = users.find(({ email }) => email === loginemail);
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
      Swal.fire({
        title: "Login Successfully",
        text: "Dear User, You have been successfully login.",
        icon: "success",
        confirmButtonText: "Ok",
      });
      document.getElementById("login").innerHTML = emailExist.email;
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

document.getElementById("signupBtn").addEventListener("click", signUp);
document.getElementById("loginForm").addEventListener("click", login);

function onLoadPage() {
  let logindiv = document.getElementById("loginDiv");
  logindiv.style.display = "none";
}
