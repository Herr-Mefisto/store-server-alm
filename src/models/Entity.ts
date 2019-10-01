export abstract class Entity {
    public id: string | null | undefined;

    constructor(id: string| null | undefined) {
        this.id = id;
    }
}