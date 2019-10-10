import { Request, Response } from "express";
import ColorController from "./ColorController";

export default [
  {
    path: "/colors",
    method: "get",
    validation: {},
    handler: async (req: Request, res: Response) => {
      console.log("getMany colors");
      const controller = new ColorController();

      controller.getMany(req, res).then(product => {
        res.status(200).json(product);
      });
    }
  }
];
