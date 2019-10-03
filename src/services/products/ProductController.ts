import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../models/Product";
import Controller from "../Controller";

export default class ProductsController extends Controller<Product, ProductRepository> {

    constructor() {
        super(new ProductRepository())
    }
}
