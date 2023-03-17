import { Task, Category } from "./types/types.js";
import renderTasks from './helpers/render-tasks.helper.js'
import {renderCategories} from './helpers/render-categories-helper.js'

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

const categories: Category[] = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
];

let selectedCategory: Category;

const tasks: Task[] = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: Category.HOBBY,
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmić koty",
        done: false,
        category:  Category.WORK,
    },
];

const addTask = (task: Task) => {
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();

    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    renderTasks(tasks,tasksContainerElement);
});
 
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks,tasksContainerElement);