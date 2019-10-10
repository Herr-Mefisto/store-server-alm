import { ColorRepository } from "../../repositories/ColorRepository";
import { Color } from "../../models/Color";
import Controller from "../Controller";

export default class ColorController extends Controller<
  Color,
  ColorRepository
> {
  constructor() {
    super(new ColorRepository());
  }
}
