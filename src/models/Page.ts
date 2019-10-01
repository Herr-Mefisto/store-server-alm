export default class Page {
    public Limit: number;
    public Offset: number;

    constructor(limit: number, offset: number) {
        this.Limit = limit;
        this.Offset = offset;
    }
}