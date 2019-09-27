import { Request, Response } from "express";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../models/Product";

export default class ProductsController {
    private readonly productRepository = new ProductRepository();

    public getProduct(request: Request, response: Response): Promise<Product> {
        let id = request.params.id;
        return this.productRepository.readOne(id);
    };

    public getProducts(request: Request, res: Response): Promise<Product[]> {
        var product = new Product("", request.query["name"], request.query["quantity"], request.query["price"]);
        return this.productRepository.read(product);
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
