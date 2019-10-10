import { Entity } from "./Entity";

export class Color extends Entity {
  public name: string | undefined;

  constructor(id?: string | null | undefined, name?: string) {
    super(id);
    this.name = name || undefined;
  }
}
