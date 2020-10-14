import { CategoryDto } from "./category.dto";

export default class State {
    public content!: string;
    public collapsed?: boolean = false;
    public categories!: CategoryDto[];
}


