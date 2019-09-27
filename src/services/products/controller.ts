import { Request, Response } from "express";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../models/Product";

export const getProduct = (request: Request, response: Response) => {
    let productRepository = new ProductRepository();
    let id = request.params.id;
    return productRepository.readOne(id);
};

export const getProducts =(request: Request, res: Response) => {
    let productRepository = new ProductRepository();
    var product = new Product("", request.query["name"], request.query["quantity"], request.query["price"]);
    return productRepository.read(product);
};

export const createProduct = (request: Request, response: Response) => {
    let productRepository = new ProductRepository();
    var product = new Product(undefined, request.body["name"], request.body["quantity"], request.body["price"]);
    return productRepository.create(product);
};

export const updateProduct = (request: Request, response: Response) => {
    let productRepository = new ProductRepository();
    let id = request.params.id;
    var product = new Product(id, request.query["name"], request.query["quantity"], request.query["price"]);
    return productRepository.update(product);
};

export const deleteProduct = (request: Request, response: Response) => {
    let productRepository = new ProductRepository();
    let id = request.params.id;
    return productRepository.delete(id);
};
