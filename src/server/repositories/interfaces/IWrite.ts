export interface IWrite<TEntity> {
  update(id: string, item: TEntity): Promise<boolean>;
  create(item: TEntity): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
