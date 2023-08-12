// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const trashList = document.getElementById("trashList");
const clearTrashButton = document.getElementById("clearTrash");

// Event listener for the "Add" button
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    // Create a delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";
    taskItem.appendChild(deleteButton);
  }
});

// Event listener for the task list
taskList.addEventListener("click", function (event) {
  if (event.target.className === "deleteButton") {
    const taskItem = event.target.parentNode;
    trashList.appendChild(taskItem);
    event.target.remove();
  }
});

// Event listener for the trash list
trashList.addEventListener("click", function (event) {
  if (event.target.className === "deleteButton") {
    const taskItem = event.target.parentNode;
    taskItem.remove();
  }
});

// Event listener for the "Clear Trash" button
clearTrashButton.addEventListener("click", function () {
  trashList.innerHTML = "";
});
