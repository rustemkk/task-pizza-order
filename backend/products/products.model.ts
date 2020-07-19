import { DataTypes, fn } from 'sequelize';

import { BaseModel } from '../lib/base.model';


class ProductsModel extends BaseModel {
  attributes = ['title', 'description', 'picture', 'price'];
 
  constructor(modelName, attributes) {
    super(modelName, attributes);
  }
}

const Products = new ProductsModel('Products', {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  picture: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
});

export default Products;
