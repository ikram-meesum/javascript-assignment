const loginuser = sessionStorage.getItem("userloginemail");
document.getElementById("login").innerHTML = "Logout: " + loginuser;

function insertTodo(e) {
  e.preventDefault();
  let todo = document.getElementById("todo").value;

  if (todo == "" || todo == null) {
    //alert("Email is required for login.");
    Swal.fire({
      icon: "error",
      title: "Todo Required...",
      text: "Please enter some text for todo list!",
      //footer: '<a href="">Why do I have this issue?</a>'
    });
    return;
  }
  const userid = JSON.parse(sessionStorage.getItem("userloginid"));

  const date = dayjs().format("DD-MM-YYYY");
  const time = dayjs().format("hh:mm A");

  var todoAry = [];
  let todoid = 0;

  let allTodos = JSON.parse(localStorage.getItem("todos"));
  console.log("total users: ", allTodos);

  let totalTodo = 0;
  if (allTodos == null) {
    totalTodo = 5001;
  } else {
    totalTodo = allTodos.length + 5001;
    console.log("second time: ", totalTodo);
  }

  todoid = totalTodo;

  const todoItem = {
    todoId: todoid,
    todo: todo,
    userId: userid,
    date,
    time,
  };
  console.log("todo : ", todoItem);
  todoAry.push(todoItem);

  todoAry = todoAry.concat(JSON.parse(localStorage.getItem("todos") || "[]"));
  localStorage.setItem("todos", JSON.stringify(todoAry));
  document.getElementById("todo").value = "";

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Todo inserted successfully",
    showConfirmButton: false,
    timer: 2000,
  });

  // load all todo
  loadTodo();
}

function loadTodo() {
  const allTodo2 = JSON.parse(localStorage.getItem("todos"));
  console.log("all todo: ", allTodo2);

  if (allTodo2 !== null) {
    var tableData = allTodo2
      .map(
        (todo, ind) =>
          `
      <tr>
        <td  class="text-center">${ind + 1}</td>
        <td>${todo.userId}</td>
        <td>${todo.todoId}</td>
        <td>${todo.todo}</td>
        <td>${todo.date}</td>
        <td>${todo.time}</td>
        <td><a href="javascript:void(0)" onclick="delTodo(${
          todo.todoId
        })" id='delTodo'>Delete</a></td>        
      </tr>
    `
      )
      .join("");

    var tbody = document.querySelector("#body");
    tbody.innerHTML = tableData;
  }
  console.log("load todo");
}

function delTodo(tid) {
  Swal.fire({
    title: "Do you want to delete that todo?",
    showDenyButton: true,
    icon: "question",
    confirmButtonText: "Yes",
    denyButtonText: `No`,
  }).then((result) => {
    if (result.isConfirmed) {
      //console.log("del todo", tid);
      Swal.fire(`Todo id ${tid} has been deleted.`, "", "success");
      let allTodo = JSON.parse(localStorage.getItem("todos"));
      console.log("all todo: ", allTodo);

      for (var i = 0; i < allTodo.length; i++) {
        if (allTodo[i].todoId == tid) {
          allTodo.splice(i, 1);
        }
      }
      allTodo = JSON.stringify(allTodo);
      console.log("after deleted: ", allTodo);
      localStorage.setItem("todos", allTodo);
      loadTodo();
      //Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      //location.href = "login.html";
    }
  });
}

function deleteAll() {
  Swal.fire({
    title: "Do you want to delete all todos?",
    //showDenyButton: true,
    showCancelButton: true,
    icon: "question",
    confirmButtonText: "Yes",
    //denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("All todos has been deleted.", "", "success");
      const allTodos = JSON.parse(localStorage.getItem("todos"));
      const userid = JSON.parse(sessionStorage.getItem("userloginid"));
      console.log(userid);

      const deleteTodo = allTodos.filter((todo) => todo.userId !== userid);
      console.log("del all", deleteTodo);

      var tableData = deleteTodo
        .map(
          (todo, ind) =>
            `
      <tr>
        <td  class="text-center">${ind + 1}</td>
        <td>${todo.userId}</td>
        <td>${todo.todoId}</td>
        <td>${todo.todo}</td>
        <td>${todo.date}</td>
        <td>${todo.time}</td>
        <td><a href="javascript:void(0)" onclick="delTodo(${
          todo.todoId
        })" id='delTodo'>Delete</a></td>        
      </tr>
    `
        )
        .join("");

      var tbody = document.querySelector("#body");
      tbody.innerHTML = tableData;
    } else if (result.isDenied) {
      //Swal.fire('Changes are not saved', '', 'info')
    }
  });
}

function logout() {
  console.log("logout");
  sessionStorage.clear();
  window.location = "index.html";
}

document.getElementById("btnTodo").addEventListener("click", insertTodo);
document.getElementById("delAll").addEventListener("click", deleteAll);
document.getElementById("login").addEventListener("click", logout);
