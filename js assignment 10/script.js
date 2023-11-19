function getUser() {
  let optionInput = document.getElementById("tbl");
  AmagiLoader.show();

  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.name);
      AmagiLoader.hide();

      let tbl = `      
  <thead>
    <tr class="table-dark">
      <th scope="col">UID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Post</th>
    </tr>
  </thead>
  <tbody>
  ${data.map((user, ind) => {
    return `<tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        <td><a href="/post.html?userid=${user.id}">Post</a></td>
      </tr>`;
  })}    
  </tbody>
      `;
      optionInput.innerHTML = tbl;
    })
    .catch((error) => {
      console.log("Error occured from getUser method:\r\n", error);
    });
}

getUser();

//document.getElementById("signupBtn").addEventListener("click", getUser);
