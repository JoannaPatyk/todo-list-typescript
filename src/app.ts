import { Task, Category } from "./types/types.js";
import renderTasks from './helpers/render-tasks.helper.js'
import {renderCategories} from './helpers/render-categories-helper.js'
import { TaskClass } from "./classes/task.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".btn-add");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
];

let selectedCategory: Category;

const tasks: Task[] = [];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();

    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    if(taskNameInputElement.value === ''){
        return;
    } else {  
        addTask(newTask);
    }

    newTask.logCreationDate();

    renderTasks(tasks,tasksContainerElement);
});
 
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks,tasksContainerElement);

const taskClassInstance = new TaskClass("Kupić mleko", false);

taskClassInstance.logCreationDate();
