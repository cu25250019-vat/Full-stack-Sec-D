document.getElementById("registerForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const course = document.getElementById("course").value;
  document.getElementById("result").textContent = `${name} registered successfully for ${course}.`;
  event.target.reset();
});
