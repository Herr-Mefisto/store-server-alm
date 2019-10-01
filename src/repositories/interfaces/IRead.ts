import Page from "../../models/Page";
import { Sort } from "../../models/Sort";

export interface IRead<TEntity> {

    read(item: TEntity, page: Page, sort: Sort): Promise<TEntity[]>

    readOne(id: string): Promise<TEntity>
}