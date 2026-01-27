const usersTable = document.getElementById("usersTable");

fetch("https://fakestoreapi.com/users")
  .then((res) => res.json())
  .then((users) => renderUsers(users));

function renderUsers(users) {
  usersTable.innerHTML = "";

  users.forEach((user) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name.firstname} ${user.name.lastname}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.address.city}</td>
      <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </td>
    `;

    usersTable.appendChild(tr);
  });
}
