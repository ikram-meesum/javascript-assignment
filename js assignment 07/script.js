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

  var userAry = [];

  // var show = {
  //   title: titleArg,
  //   type: typeArg,
  //   genre: genreArg,
  //   watched: watchedArg,
  // };
  let id = Math.floor(Math.random() * 1000);

  let data = { id, username, email, password };
  userAry.push(data);

  userAry = userAry.concat(JSON.parse(localStorage.getItem("users") || "[]"));
  console.log(userAry);

  localStorage.setItem("users", JSON.stringify(userAry));

  //----------------------

  //users.push({ username, email, password });
  //localStorage.setItem("users", JSON.stringify(data));

  //console.log(JSON.parse(localStorage.getItem("users")));

  Swal.fire({
    title: "User created! Do you want to create some other users?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `No, Goto login page`,
  }).then((result) => {
    if (result.isConfirmed) {
      //Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      location.href = "login.html";
      // var x = document.getElementById("textsignup");
      // let logindiv = document.getElementById("loginDiv");
      // x.style.display = "none";
      // logindiv.style.display = "block";
    }
  });
  //}
}

document.getElementById("signupBtn").addEventListener("click", signUp);
