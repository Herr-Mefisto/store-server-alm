import { Request, Response } from "express";
import { ProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../models/Product";
import ProductsController from "./ProductController";
import validation from "./validation";

export default [
    {
        path: "/products/:id",
        method: "get",
        validation: validation.getOne,
        handler: async (req: Request, res: Response) => {
            console.log("getOne");
            const controller = new ProductsController();
            controller
                .getOne(req, res)
                .then((product: Product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products",
        method: "get",
        validation: validation.getMany,
        handler: async (req: Request, res: Response) => {
            console.log("getMany");
            const controller = new ProductsController();

            controller
                .getMany(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products",
        method: "post",
        validation: validation.create,
        handler: async (req: Request, res: Response) => {
            console.log("create");
            const controller = new ProductsController();
            controller
                .create(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products/:id",
        method: "put",
        validation: validation.update,
        handler: async (req: Request, res: Response) => {
            console.log("update");
            const controller = new ProductsController();
            controller
                .update(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    },
    {
        path: "/products/:id",
        method: "delete",
        validation: validation.delete,
        handler: async (req: Request, res: Response) => {
            console.log("delete");
            const controller = new ProductsController();
            controller
                .delete(req, res)
                .then((product) => {
                    res.status(200).json(product);
                });
        }
    }
];