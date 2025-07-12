// filter 

const tasks = [
  { id: 1, title: "Submit Resume", dueDate: "2025-04-20" },
  { id: 2, title: "Attend Seminar", dueDate: "2025-04-24" },
  { id: 3, title: "Project Meeting", dueDate: "2025-04-21" },
  { id: 4, title: "Course Signup", dueDate: "2025-04-23" }
];

const today = new Date("2025-04-23");
const overdueTasks = tasks.filter(task => new Date(task.dueDate) < today);
console.log(overdueTasks);