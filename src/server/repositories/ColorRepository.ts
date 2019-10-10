import { Color } from "../models/Color";
import { Repository } from "./Repository";
import { QueryBuilder } from "knex";

export class ColorRepository extends Repository<Color> {
  constructor() {
    super("color");
  }

  constructFilters(filter: Color, builder: QueryBuilder<any, any[]>): void {}
}
