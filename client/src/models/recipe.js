import Model from "./model";

export default class Recipe extends Model {
  name;
  category;
  ingredients;
  method;
  photo;
  preparationTime;
  _id;
  constructor(data) {
    super(data);
    this.name = data.name;
    this.category = data.category;
    this.ingredients = data.ingredients;
    this.method = data.method;
    this.photo = data.photo;
    this.preparationTime = data.preparationTime;
    this._id = data._id;
  }
}
