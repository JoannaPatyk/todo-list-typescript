import { Task } from "../types/types";

const render = (tasks: Task[], tasksContainerElement: HTMLElement) => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id: string = `task-${index}`;

        const checkboxElement: HTMLInputElement =
            document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);

        const deleteElement: any =
            document.createElement("button");
            deleteElement.textContent = 'X';
            deleteElement.classList.add('btn-delete');

        taskElement.appendChild(checkboxElement);
        taskElement.appendChild(labelElement);
        taskElement.appendChild(deleteElement);
    
        tasksContainerElement.appendChild(taskElement);

        deleteElement.addEventListener('click', (event) => {
            const listItem = event.target.parentNode;
            listItem.parentNode.removeChild(listItem);
          });
    });
};

export default render;