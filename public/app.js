document.body.style.background = "black";

function deleteTodo(id) {
  console.log("hello");
  fetch("/delete/" + id, { method: "delete" });
  document.getElementById(id).remove();
}

var socket = io();
