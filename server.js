const express = require("express");
const app = express();
app.use(express.json());

let students = [];
let nextId = 1;

app.get("/students", (req, res) => res.json(students));
app.post("/students", (req, res) => {
  const { name, rollNo, course } = req.body;
  if (!name || !rollNo || !course) return res.status(400).json({ error: "name, rollNo and course are required" });
  const student = { id: nextId++, name, rollNo, course };
  students.push(student);
  res.status(201).json(student);
});
app.delete("/students/:id", (req, res) => {
  const before = students.length;
  students = students.filter(student => student.id !== Number(req.params.id));
  if (students.length === before) return res.status(404).json({ error: "Student not found" });
  res.status(204).end();
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Student API running at http://localhost:${PORT}`));
