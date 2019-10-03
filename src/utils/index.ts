import { Router, Request, Response, NextFunction } from "express";
import Joi from "@hapi/joi";
import { ValidationError } from "./httpErrors";

type Wrapper = ((router: Router) => void);

export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
    for (const f of middleware) {
        f(router);
    }
};

type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

type Route = {
    path: string;
    method: string;
    validation: any;
    handler: Handler | Handler[];
};

export const applyRoutes = (routes: Route[], router: Router) => {
    for (const route of routes) {
        const { method, path, handler, validation } = route;
        // (router as any)[method](path,handler);
        (router as any)[method](path, (req, res, next) => {
            validateRoute(req, res, next, validation, handler);
        });
    }
}

function validateRoute(request: Request, response: Response, next: NextFunction, schema: any, handler: Handler | Handler[]) {

    var joiSchema = Joi.object(schema).unknown(true);

    var input = {
        query: request.query,
        params: request.params,
        body: request.body
    };
    var joiResults = joiSchema.validate(input);
    if (joiResults.error) {
        throw new ValidationError(joiResults.error.message);
    }
    else {
        (handler as any)(request, response, next);
    }
}