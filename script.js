const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (username !== "admin" || password !== "internware") {
    alert("Incorrect username or password.");
    return;
  }

  const container = document.querySelector(".login-container");

  container.innerHTML = `
    <h2>Dashboard</h2>
    <button id="theme-toggle" type="button">Switch to Light Mode</button>
    <p>Welcome, Admin!</p>

    <input id="search" type="text" placeholder="Search users...">

    <table>
      <thead>
        <tr><th>Name</th><th>Role</th><th>Email</th></tr>
      </thead>
      <tbody id="user-rows">
        <tr><td>Palak Tanwar</td><td>Student</td><td>palak@example.com</td></tr>
        <tr><td>Rahul Sharma</td><td>Student</td><td>rahul@example.com</td></tr>
        <tr><td>Angel</td><td>Student</td><td>angel@example.com</td></tr>
      </tbody>
    </table>

    <button id="logout" type="button">Logout</button>
  `;

  const search = document.querySelector("#search");
  const rows = document.querySelectorAll("#user-rows tr");

  search.addEventListener("input", function () {
    const term = search.value.toLowerCase();

    rows.forEach(function (row) {
      row.style.display = row.textContent.toLowerCase().includes(term) ? "" : "none";
    });
  });

  const themeToggle = document.querySelector("#theme-toggle");

  themeToggle.addEventListener("click", function () {
    const isLight = container.classList.toggle("light-mode");
    themeToggle.textContent = isLight ? "Switch to Dark Mode" : "Switch to Light Mode";
  });

  document.querySelector("#logout").addEventListener("click", function () {
    location.reload();
  });
});


