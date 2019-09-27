export interface IRead<TEntity> {

    read(item: TEntity): Promise<TEntity[]>

    readOne(id: string): Promise<TEntity>
}