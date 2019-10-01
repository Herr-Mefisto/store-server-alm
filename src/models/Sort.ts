export class Sort {
    public Field: string;
    public Order: SortOrder;

    constructor(field: string, order: SortOrder) {
        this.Field = field;
        this.Order = order;
    }
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}