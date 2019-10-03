export interface IWrite<TEntity>{

    update(item: TEntity): Promise<boolean>;
    create(item: TEntity): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}