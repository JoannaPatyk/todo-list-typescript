import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("Zmiana na general!");
    }
    else if (category === Category.GYM) {
        alert("LECISZ NA SILKE");
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = "red";
    }
    else if (category === Category.WORK) {
        console.log("Zmiana na work!");
        alert("PRACA POPLACA");
        document.body.style.background = "green";
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const renderCategories = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const id = `category-${category}`;
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = id;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", id);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
