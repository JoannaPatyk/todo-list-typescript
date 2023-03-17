import { Category } from "../types/type";

export const renderCategories = (categories: Category[], categoriesContainerElement: HTMLElement, selectedCategory: Category) => {
    categories.forEach((category) => {
        const categoryElement: HTMLElement = document.createElement("li");

        const id: string =`category-${category}`;

        const radioInputElement: HTMLInputElement =
            document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = id;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute("for", id);
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
};