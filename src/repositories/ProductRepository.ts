import { Product } from "../models/Product";
import { Repository } from "./Repository";
import { QueryBuilder } from "knex";

export class ProductRepository extends Repository<Product> {
    constructor() {
        super("products");
    }

    constructFilters(filter: Product, builder: QueryBuilder<any, any[]>): void {

        if (filter.name != undefined)
            builder.where("name", "like", filter.name);

        if (filter.quantity != undefined)
            builder.where("quantity", "=", filter.quantity);

        if (filter.price != undefined)
            builder.where("price", "=", filter.price);
    }
}