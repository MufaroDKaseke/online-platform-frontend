import Dto from "./dto";

export default class ChallengeDto extends Dto {
    public content!: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(obj?: any) {
        super(obj);
    };
}


