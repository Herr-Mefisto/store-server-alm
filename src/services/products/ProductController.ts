import { Request, Response } from "express";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../models/Product";
import Controller from "../Controller";

export default class ProductsController extends Controller<Product, ProductRepository> {

    constructor() {
        super(new ProductRepository())
    }

    protected getEntityDataFromRequest(request: Request): Product {
        var product = new Product("", request.query["name"], request.query["quantity"], request.query["price"]);
        return product;
    }    
}
