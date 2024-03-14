"use strict";
const form = document.querySelector("form");
const todo = JSON.parse(localStorage.getItem("todos")) || [];
form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    const value = form[0].value;
    todo.push(value);
    localStorage.setItem("todos", JSON.stringify(todo));
    setTimeout(() => {
      alert(`Todo added`);
      location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
  }
});
function getTodo() {
  try {
    const todoBody = document.getElementById("getcontent");
    let listing = ``;
    todo.map((element, index) => {
      listing += `
    <div class="card" style="width:100%;">
    <div class="card-body">
    <h6 class="card-title">${element}</h6>
    <button class="btn btn-primary" onclick="onUpdate(${index})">Update</button>
    <button class="btn btn-danger" onclick="onDelete(${index})">Delete</button>
  </div>
  </div>
  `;
    });
    todoBody.innerHTML = listing;
  } catch (error) {
    console.log(error);
  }
}
getTodo();
function onDelete(i) {
  try {
    const deleted = todo.filter((element, index) => index !== i);
    localStorage.setItem("todos", JSON.stringify(deleted));
    setTimeout(() => {
      alert(`Todo deleted`);
      location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
  }
}
function onUpdate(i) {
  try {
    form[0].value = todo[i];
    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "block";
    document.getElementsByClassName("btn btn-danger")[i].style.display = "none";
    const update = document.getElementById("update");
    update.addEventListener("click", () => {
      let value = form[0].value;
      todo[i] = value;
      localStorage.setItem("todos", JSON.stringify(todo));
      setTimeout(() => {
        alert(`Todo updated successfully`);
        location.reload();
      }, 500);
    });
  } catch (error) {
    console.log(error);
  }
}
