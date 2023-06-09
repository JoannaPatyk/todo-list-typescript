export class Task {
    public name: string;
    public done: boolean;
    public category?: Category;
    
    private createdAt: Date;

    constructor(name: string, done: boolean, category?: Category) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }

    logCreationDate() {
        console.log(`Task został stworzony ${this.createdAt}`);
    }
}  

export enum Category {
    GENERAL = "dom",
    WORK = "praca",
    GYM = "siłownia",
    HOBBY = "hobby",
}