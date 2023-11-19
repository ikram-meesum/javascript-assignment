// AmagiLoader.show();
// setTimeout(() => {
//   AmagiLoader.hide();
// }, 3000);

function getPost() {
  let optionInput = document.getElementById("tbl");

  const urlParams = new URLSearchParams(window.location.search);
  const userid = urlParams.get("userid");
  console.log(userid);
  AmagiLoader.show();

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Get Post: ", data);
      AmagiLoader.hide();
      //console.log(data.name);
      let tbl = `      
    <thead>
      <tr class="table-dark">
        <th scope="col">PostID</th>
        <th scope="col">Body</th>
        <th scope="col">Title</th>
        <th scope="col">Comments</th>        
      </tr>
    </thead>
    <tbody>
    ${data.map((post, ind) => {
      return `<tr>
          <th scope="row">${post.id}</th>
          <td>${post.body}</td>
          <td>${post.title}</td>
          
          <td><a href="/comments.html?postid=${post.id}">Comments</a></td>
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

getPost();
