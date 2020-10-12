


export default class Dto {
    public id?: string;

    constructor(obj?: any) {
        if (!!obj) {
            Object.assign(this, obj);
        }
    }
}