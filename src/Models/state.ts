import { CategoryDto } from "./category.dto";
import ChallengeDto from "./challenge.dto";

export default class State {
    public content!: string;
    public collapsed?: boolean = true;
    public categories!: CategoryDto[];
    public challenges!: ChallengeDto[];
    public theme!: 'dark' | 'light';
    public loading!: boolean;
}


