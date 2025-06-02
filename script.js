const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task event
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("🚨 Please enter a task!");
    return;
  }
  addTask(taskText);
  taskInput.value = "";
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Add task to list
function addTask(taskText) {
  const li = document.createElement("li");
  li.classList.add("task");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="btn-group">
      <button class="edit-btn" title="Edit">✏️</button>
      <button class="remove-btn" title="Remove">❌</button>
    </div>
  `;

  const taskTextSpan = li.querySelector(".task-text");
  const editBtn = li.querySelector(".edit-btn");
  const removeBtn = li.querySelector(".remove-btn");

  // Toggle completion
  taskTextSpan.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove task
  removeBtn.addEventListener("click", () => {
    li.classList.add("fall");
    li.addEventListener("transitionend", () => li.remove());
  });

  // Edit task
  editBtn.addEventListener("click", () => {
    const newText = prompt("✏️ Edit your task:", taskTextSpan.textContent);
    if (newText && newText.trim()) {
      taskTextSpan.textContent = newText.trim();
    }
  });

  taskList.appendChild(li);
}
