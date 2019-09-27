import * as knex from "knex";
import { config } from "node-config-ts";
import Knex = require("knex");
import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";

export abstract class Repository<TEntity> implements IRead<TEntity>, IWrite<TEntity>{

    private _knex: Knex.QueryBuilder;

    get Builder(): Knex.QueryBuilder {
        return this._knex;
    }

    constructor(tableName: string) {
        this._knex = Knex({
            client: 'postgresql',
            connection: config.database_connection,
            pool: {
                min: 2,
                max: 10
            }
        })<TEntity>(tableName);
    }

    create(item: TEntity): Promise<boolean> {
        console.log(item);
        return this.Builder
            .insert(item)
            .then(() => {
                return true;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    }

    update(item: TEntity): Promise<boolean> {
        return this.Builder
            .update(item)
            .then(() => {
                return true;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    }

    delete(id: string): Promise<boolean> {
        return this.Builder
            .delete(id)
            .then(() => {
                return true;
            })
            .catch((err) => {
                console.log(err);
                return false;
            });
    }

    read(item: TEntity): Promise<TEntity[]> {
        let builder = this.Builder
            .select("*");

        //this.constructFilters(item, builder);

        return builder;
    }

    readOne(id: string): Promise<TEntity> {
        return this.Builder
            .select("*")
            .where({ id: id })
            .first();
    }

    abstract constructFilters(filter: TEntity, builder: knex.QueryBuilder): void;
}