import { Request, Response } from "express";

export default [
    {
        path: "/products",
        method: "get",
        handler: async (req: Request, res: Response) => {
            res.send("Hello World");
        }
    }
];