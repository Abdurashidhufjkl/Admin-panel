const API = "https://fakestoreapi.com/users";
const usersTable = document.getElementById("usersTable");
const elLogout = document.querySelector(".logout__btn");

const modal = document.getElementById("userModal");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");

let editId = null;


elLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  localStorage.removeItem("usename");
  window.location.href = "index.html";
});



