import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
    if (category === Category.GENERAL) {
        document.body.style.background = "#FD7A5B"
        document.body.style.backgroundImage = "url(img/flowers.png)";
    } else if (category === Category.GYM ) {
        document.body.style.background = "#FA669A"
        document.body.style.backgroundImage = "url(img/flowers.png)";
    } else if (category === Category.HOBBY ) {
        document.body.style.background = "#9C52E3";
        document.body.style.backgroundImage = "url(img/flowers.png)";
    } else if (category === Category.WORK) {
        document.body.style.background = "#5A8EFB";
        document.body.style.backgroundImage = "url(img/flowers.png)";
    } else {
        const never: never = category;
        console.log(never);
    }
};

export const renderCategories = (
    categories: Category[],
    categoriesContainerElement: HTMLElement, 
    inputChangeCallback: (category: Category) => void
    ) => {
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
            inputChangeCallback(category);
            handleCategoryChange(category);
        });

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute("for", id);
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    });
};