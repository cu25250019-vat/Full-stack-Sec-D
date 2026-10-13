const form = document.getElementById("form");
const rows = document.getElementById("rows");
form.addEventListener("submit", event => {
  event.preventDefault();
  const values = ["name", "roll", "course"].map(id => document.getElementById(id).value.trim());
  const row = document.createElement("tr");
  values.forEach(value => { const cell = document.createElement("td"); cell.textContent = value; row.appendChild(cell); });
  const action = document.createElement("td");
  const remove = document.createElement("button");
  remove.textContent = "Delete";
  remove.addEventListener("click", () => row.remove());
  action.appendChild(remove); row.appendChild(action); rows.appendChild(row); form.reset();
});
