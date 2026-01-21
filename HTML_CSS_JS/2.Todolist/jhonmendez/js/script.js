import Task from "./Task.js";

const nameTask = document.getElementById("task-name");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

//botones de filtro
const filterAllBtn = document.getElementById("filter-all");
const filterActiveBtn = document.getElementById("filter-active");
const filterCompleteBtn = document.getElementById("filter-complete");

//conteo de tareas
const taskLen = document.getElementById("task-len");

let tasks = [
  {
    name: "hacer aseo",
    description: "des1",
    status: false,
    date: new Date().toLocaleDateString(),
  },
  {
    name: "hacer aseo",
    description: "des2",
    status: true,
    date: new Date().toLocaleDateString(),
  },
  {
    name: "estudiar",
    status: false,
    description: "des3",
    date: new Date(),
  },
  {
    name: "programar",
    status: true,
    description: "des3",
    date: new Date(),
  },
];
let currentFilter = "completed";
const readerTask = () => {
  taskLen.innerHTML = `#Task ${tasks.length}`;
  taskList.innerHTML = "";

  //filtro de tareas
  const filterTask = tasks.filter((task) => {
    if (currentFilter == "active") return !task.status;
    if (currentFilter == "completed") return task.status;
    return true;
  });

  filterTask.forEach((task, index) => {
    //qué queremos renderizar
    const li = document.createElement("li");
    li.innerHTML = `
        <div>
          <input id="task-${index}" type="checkbox" ${task.status ? "checked" : ""} />
          <label class="task-title" for="task-${index}"
            >${task.name} | ${task.description} | ${task.date}</label
          >
          <span class="material-symbols-outlined task-delete"> delete </span>
        </div>
  `;
    //donde quiero renderizar
    taskList.appendChild(li);
  });
};

readerTask();

addBtn.addEventListener("click", () => {
  let task = new Task(
    nameTask.value.split("-")[0],
    nameTask.value.split("-")[1],
  );
  tasks.push(task);
  readerTask();
});

filterAllBtn.addEventListener("click", () => {
  currentFilter = "all";
  readerTask();
});

filterCompleteBtn.addEventListener("click", () => {
  currentFilter = "completed";
  readerTask();
});

filterActiveBtn.addEventListener("click", () => {
  currentFilter = "active";
  readerTask();
});
