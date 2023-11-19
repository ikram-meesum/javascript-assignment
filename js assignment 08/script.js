function signUp(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  if (username == "" || username == null) {
    //alert("Please type username for authentication.");
    Swal.fire({
      icon: "error",
      title: "Username Required...",
      text: "Please enter username for authentication!",
      //footer: '<a href="">Why do I have this issue?</a>'
    });
    return;
  }
  if (email == "" || email == null) {
    //alert("Please type valid email for authentication.");
    Swal.fire({
      icon: "error",
      title: "Email Required...",
      text: "Please enter an email for authentication!",
      //footer: '<a href="">Why do I have this issue?</a>'
    });
    return;
  }
  if (password == "" || password == null) {
    //alert("Enter correct password.");
    Swal.fire({
      icon: "error",
      title: "Password Required...",
      text: "Please enter valid password for authentication!",
      //footer: '<a href="">Why do I have this issue?</a>'
    });
    return;
  }

  var userAry = [];
  let id = 0;

  let allUser = JSON.parse(localStorage.getItem("users"));
  console.log("total users: ", allUser);

  let totalTodo = 0;
  if (allUser == null) {
    totalTodo = 1001;
  } else {
    totalTodo = allUser.length + 1001;
    console.log("second time: ", totalTodo);
  }

  id = totalTodo;

  let data = { id, username, email, password };
  userAry.push(data);

  userAry = userAry.concat(JSON.parse(localStorage.getItem("users") || "[]"));
  console.log(userAry);

  localStorage.setItem("users", JSON.stringify(userAry));

  Swal.fire(
    "User Created!",
    "New user has been created successfully!",
    "success"
  );

  setTimeout(() => {
    location.href = "login.html";
  }, 3000);

  // Swal.fire({
  //   title: "User created! Do you want to create some other users?",
  //   showDenyButton: true,
  //   confirmButtonText: "Yes",
  //   denyButtonText: `No, Goto login page`,
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     //Swal.fire("Saved!", "", "success");
  //   } else if (result.isDenied) {
  //     location.href = "login.html";
  //   }
  // });
}

document.getElementById("signupBtn").addEventListener("click", signUp);
