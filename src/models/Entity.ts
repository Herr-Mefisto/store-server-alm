export abstract class Entity {
    private id: string | null | undefined;

    constructor(id: string| null | undefined) {
        this.id = id;
    }
}