let tasks = [];

document.getElementById("addTaskBtn").addEventListener("click", function() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task !== "") {
    tasks.push(task);
    displayTasks();
    input.value = "";
  }
});

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let task of tasks) {
        let li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    }

    document.getElementById("taskCount").textContent = "Task: " + tasks.length;
}

