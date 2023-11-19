function getUser(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  console.log(username);
  let optionInput = document.getElementById("card");
  let opt = "";

  if (username == "" || username == null) {
    //alert("Please type username for authentication.");
    Swal.fire({
      icon: "error",
      title: "Username Required...",
      text: "Please enter username for fetch API!",
      //footer: '<a href="">Why do I have this issue?</a>'
    });
    return;
  } else {
    //console.log("test123");
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.login == null || data.login == "") {
          Swal.fire({
            icon: "error",
            title: "Invalid Username.",
            text: "Please enter a valid github username for fetch API!",
            //footer: '<a href="">Why do I have this issue?</a>'
          });
          optionInput.innerHTML = `<h3 class='text-danger'>No profile found.</h3>`;
        } else {
          opt = `<div class="card" style="width: 25rem;">
    <img src="${data.avatar_url}" class="card-img-top" alt="test" />
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <h6>Login: ${data.login}</h6>
        <p class="card-text">${data.bio}.<br/>${data.followers} Followers. ${data.following} Following.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Location: ${data.location}.</li>
        <li class="list-group-item">Company: ${data.company}.</li>
        <li class="list-group-item">Total Repository: ${data.public_repos}.</li>
    </ul>
    <div class="card-body">
        <a href="${data.html_url}" class="btn btn-primary btn-sm">View Profile</a>        
    </div>
</div>
`;
          optionInput.innerHTML = opt;
          username = "";
        }
      })
      .catch((error) => {
        console.log("Error occured from getUser method:\r\n", error);
      });
  }

  // Swal.fire(
  //   "User Created!",
  //   "New user has been created successfully!",
  //   "success"
  // );

  // Swal.fire({
  //   title: "User created! Do you want to create some other users?",
  //   showDenyButton: true,
  //   confirmButtonText: "Yes",
  //   denyButtonText: `No, Goto login page`,
}

document.getElementById("signupBtn").addEventListener("click", getUser);
