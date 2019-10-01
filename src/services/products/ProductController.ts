import { Request, Response } from "express";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../models/Product";
import Page from "../../models/Page";
import { Sort, SortOrder } from "../../models/Sort";

export default class ProductsController {
    private readonly productRepository = new ProductRepository();

    public getProduct(request: Request, response: Response): Promise<Product> {
        let id = request.params.id;
        return this.productRepository.readOne(id);
    };

    public getProducts(request: Request, res: Response): Promise<Product[]> {
        const offset = parseInt(request.query["offset"], 10);
        const limit = parseInt(request.query["limit"], 10);
        var page = new Page(limit, offset);

        var sortByField = request.query["sortBy"];
        var sortOrder = request.query["sortOrder"] == SortOrder.asc.toString() ? SortOrder.asc : SortOrder.desc;
        var sort = new Sort(sortByField, sortOrder);

        var product = new Product("", request.query["name"], request.query["quantity"], request.query["price"]);
        return this.productRepository.read(product, page, sort);
    };

    public createProduct(request: Request, response: Response): Promise<boolean> {
        var product = new Product(undefined, request.body["name"], request.body["quantity"], request.body["price"]);
        return this.productRepository.create(product);
    };

    public updateProduct(request: Request, response: Response): Promise<boolean> {
        let id = request.params.id;
        var product = new Product(id, request.query["name"], request.query["quantity"], request.query["price"]);
        return this.productRepository.update(product);
    };

    public deleteProduct(request: Request, response: Response): Promise<boolean> {
        let id = request.params.id;
        return this.productRepository.delete(id);
    };
}
