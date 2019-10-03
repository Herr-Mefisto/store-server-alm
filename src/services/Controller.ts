import { Request, Response } from "express";
import { Repository } from "../repositories/Repository";
import { Entity } from "../models/Entity";
import { Sort, SortOrder } from "../models/Sort";
import Page from "../models/Page";

export default abstract class Controller<TEntity extends Entity, TRepository extends Repository<TEntity>> {
    protected readonly Repository: TRepository;

    constructor(repository: TRepository) {
        this.Repository = repository;
    }

    public getOne(request: Request, response: Response): Promise<TEntity> {
        let id = request.params.id;
        return this.Repository.readOne(id);
    };
 
    public getMany(request: Request, res: Response): Promise<TEntity[]> {
        const offset = parseInt(request.query["offset"], 10);
        const limit = parseInt(request.query["limit"], 10);
        var page = new Page(limit, offset);

        var sortByField = request.query["sortBy"];
        var sortOrder = request.query["sortOrder"] == SortOrder.asc.toString() ? SortOrder.asc : SortOrder.desc;
        var sort = new Sort(sortByField, sortOrder);

        var entity = this.getEntityDataFromRequest(request.query);
        return this.Repository.read(entity, page, sort);
    };

    public create(request: Request, response: Response): Promise<boolean> {
        var entity = this.getEntityDataFromRequest(request.body);
        return this.Repository.create(entity);
    };

    public update(request: Request, response: Response): Promise<boolean> {
        let id = request.params.id;
        var entity = this.getEntityDataFromRequest(request.body);
        entity.id = id;
        return this.Repository.update(entity);
    };

    public delete(request: Request, response: Response): Promise<boolean> {
        let id = request.params.id;
        return this.Repository.delete(id);
    };

    protected getEntityDataFromRequest(inputObject: any): TEntity {
        var entity = {};

        Object.entries(inputObject).forEach(element => {
            const key = element[0];
            const value = element[1];
            entity[key] = value;
        });

        return entity as TEntity;
    }
}
