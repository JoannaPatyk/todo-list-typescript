import {Category} from './type'

export interface Task {
    name: string;
    done: boolean;
    category?: Category;
}
