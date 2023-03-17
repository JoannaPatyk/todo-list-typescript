const taskNameInputEl = document.querySelector("#name");
const addButtonEl = document.querySelector("button");
const taskContainerEl = document.querySelector(".tasks");
;
const tasks = [
    {
        title: "wyrzucić śmieci",
        done: false,
    },
    {
        title: "nakarmić koty",
        done: true,
    },
    {
        title: "kupić mleko",
        done: false,
    },
];
const render = () => {
    taskContainerEl.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskEl = document.createElement("li");
        const id = `task-${index}`;
        const labelEl = document.createElement("label");
        labelEl.innerText = task.title;
        labelEl.setAttribute("for", id);
        const checkboxEl = document.createElement("input");
        checkboxEl.type = "checkbox";
        checkboxEl.title = task.title;
        checkboxEl.checked = task.done;
        checkboxEl.id = id;
        checkboxEl.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskEl.appendChild(labelEl);
        taskEl.appendChild(checkboxEl);
        taskContainerEl.appendChild(taskEl);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonEl.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputEl.value, done: false });
    render();
    taskNameInputEl.value = "";
});
render();
