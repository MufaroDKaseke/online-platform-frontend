import Dto from "./dto";


export class CategoryDto extends Dto {

    public Name!: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(obj?: any) {
        super(obj);
    }
}