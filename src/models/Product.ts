import { Entity } from "./Entity";

export class Product extends Entity {
    public name: string;
    public quantity: number;
    public price: number;

    constructor(id: string | null | undefined, name: string, quantity: number, price: number) {
        super(id);
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

