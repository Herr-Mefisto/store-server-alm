import { Request, Response } from "express";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../models/Product";
import ProductsController from "./controller";
export default [
    {
        path: "/products/:id",
        method: "get",
        handler: async (req: Request, res: Response) => {
            controller
                .getProduct(req, res)
                .then((product: Product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products",
        method: "get",
        handler: async (req: Request, res: Response) => {
            controller
                .getProducts(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products",
        method: "post",
        handler: async (req: Request, res: Response) => {
            controller
                .createProduct(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products/:id",
        method: "put",
        handler: async (req: Request, res: Response) => {
            controller
                .updateProduct(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products/:id",
        method: "delete",
        handler: async (req: Request, res: Response) => {
            controller
                .deleteProduct(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    }
];