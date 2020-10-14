import { CategoryDto } from "./category.dto";

export default class State {
    public content!: string;
    public collapsed?: boolean = true;
    public categories!: CategoryDto[];
}


