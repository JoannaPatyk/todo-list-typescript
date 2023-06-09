export class Task {
    constructor(name, done, category) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate() {
        console.log(`Task został stworzony ${this.createdAt}`);
    }
}
export var Category;
(function (Category) {
    Category["GENERAL"] = "dom";
    Category["WORK"] = "praca";
    Category["GYM"] = "si\u0142ownia";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
