import * as knex from "knex";
import { config } from "node-config-ts";
import Knex = require("knex");
import { IRead } from "./interfaces/IRead";
import { IWrite } from "./interfaces/IWrite";
import { Entity } from "../models/Entity";
import Page from "../models/Page";
import { Sort } from "../models/Sort";

export abstract class Repository<TEntity extends Entity>
  implements IRead<TEntity>, IWrite<TEntity> {
  private _knex: Knex.QueryBuilder;

  get Builder(): Knex.QueryBuilder {
    return this._knex;
  }

  constructor(tableName: string) {
    this._knex = Knex({
      client: "postgresql",
      connection: config.database_connection,
      pool: {
        min: 2,
        max: 10
      }
    })<TEntity>(tableName);
  }

  create(item: TEntity): Promise<boolean> {
    console.log(item);
    return this.Builder.insert(item)
      .then(() => {
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }

  update(id: string, item: TEntity): Promise<boolean> {
    return this.Builder.where({ id: id })
      .update(item)
      .then(() => {
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }

  delete(id: string): Promise<boolean> {
    return this.Builder.where({ id: id })
      .delete()
      .then(() => {
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  }

  read(item: TEntity, page: Page, sort: Sort): Promise<TEntity[]> {
    let builder = this.Builder.select("*");

    builder.limit(!isNaN(page.Limit) ? page.Limit : 20);
    builder.offset(!isNaN(page.Offset) != undefined ? page.Offset : 0);

    if (sort != undefined && sort.Field != undefined) {
      builder.orderBy(sort.Field, sort.Order.toString());
    }

    this.constructFilters(item, builder);

    return builder;
  }

  readOne(id: string): Promise<TEntity> {
    return this.Builder.select("*")
      .where({ id: id })
      .first();
  }

  abstract constructFilters(filter: TEntity, builder: knex.QueryBuilder): void;
}
