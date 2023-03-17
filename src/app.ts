import {Category} from './types/type';
import {Task} from './types/interface';
import renderTasks from './helpers/render-tasks.helper.js'
import {renderCategories} from './helpers/render-categories-helper.js'

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

const categories: Category[] = ["general", "work", "gym", "hobby"];

let selectedCategory: Category;

const tasks: Task[] = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: "hobby",
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: "gym",
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: "work",
    },
];

const addTask = (task: Task) => {
    tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();

    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks,tasksContainerElement);
});
 
renderCategories(categories, categoriesContainerElement, selectedCategory);
renderTasks(tasks,tasksContainerElement);