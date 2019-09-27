import { Product } from "../models/Product";
import { Repository } from "./Repository";

export class ProductRepository extends Repository<Product> {
    constructor() {
        super("products");
    }
    constructFilters(filter: Product, builder: import("knex").QueryBuilder<any, any[]>): void {

        builder
            .where("name","like",filter.name)
            .where("quantity", "=", filter.quantity)
            .where("price", "=", filter.price);
    }

}