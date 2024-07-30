const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load tasks from localStorage on page load
window.onload = function() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = task;
      listContainer.appendChild(li);
      const span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    });
  }
};

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    const task = inputBox.value;
    const li = document.createElement("li");
    li.innerHTML = task;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Save tasks to localStorage
    const tasks = Array.from(listContainer.children).map((li) => li.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();

    // Update tasks in localStorage
    const tasks = Array.from(listContainer.children).map((li) => li.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}, false);