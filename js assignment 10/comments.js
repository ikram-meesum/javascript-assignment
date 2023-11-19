function getPost() {
  let optionInput = document.getElementById("tbl");

  const urlParams = new URLSearchParams(window.location.search);
  const postid = urlParams.get("postid");
  console.log(postid);
  AmagiLoader.show();

  console.log(
    "path: ",
    `https://jsonplaceholder.typicode.com/comments?postId=${postid}`
  );

  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
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
          <td>${post.name}</td>
          <td>${post.email}</td>
          <td>${post.body}</td>
        </tr>`;
    })}    
    </tbody>
        `;
      optionInput.innerHTML = tbl;
    })
    .catch((error) => {
      console.log("Error occured from getComments:\r\n", error);
    });
}

getPost();
