import { Task, Category } from "./types/types.js";
import renderTasks from './helpers/render-tasks.helper.js';
import { renderCategories } from './helpers/render-categories-helper.js';
import { TaskClass } from "./classes/task.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector(".btn-add");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
];
let selectedCategory;
const tasks = [];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    if (taskNameInputElement.value === '') {
        return;
    }
    else {
        addTask(newTask);
    }
    newTask.logCreationDate();
    renderTasks(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass("Kupić mleko", false);
taskClassInstance.logCreationDate();
