const taskNameInputEl: HTMLInputElement = document.querySelector("#name");
const addButtonEl: HTMLButtonElement = document.querySelector("button");
const taskContainerEl: HTMLElement = document.querySelector(".tasks");

interface Task {
    title: string,
    done: boolean
};

const tasks: Task[] = [
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

    const taskEl: HTMLElement = document.createElement("li");
    const id: string = `task-${index}`;
    const labelEl: HTMLLabelElement = document.createElement("label");
    labelEl.innerText = task.title;
    labelEl.setAttribute("for", id);

    const checkboxEl: HTMLInputElement = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.title = task.title;
    checkboxEl.checked = task.done;
    checkboxEl.id = id;
    checkboxEl.addEventListener("change", ()=> {
        task.done = !task.done;
    });

   taskEl.appendChild(labelEl);
   taskEl.appendChild(checkboxEl);

   taskContainerEl.appendChild(taskEl);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addButtonEl.addEventListener("click", (event: Event) => {
  event.preventDefault();
  
  addTask({title: taskNameInputEl.value, done: false});
  render();

  taskNameInputEl.value = "";
});

render();
