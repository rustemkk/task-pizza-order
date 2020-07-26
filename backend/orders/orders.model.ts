import { DataTypes } from 'sequelize';

import { BaseModel } from '../lib/base.model';
import ProductsModel from '../products/products.model';
import db from '../services/db.service';


class OrdersModel extends BaseModel {
  attributes = ['name', 'address'];

  constructor(modelName, attributes) {
    super(modelName, attributes);
  }

  associate = () => {
    const OrderProducts = db.define('OrderProducts', {
      count: {
        type: DataTypes.INTEGER,
      },
    });

    this.model.belongsToMany(ProductsModel.model, { through: OrderProducts, as: 'orderProducts' });
    ProductsModel.model.belongsToMany(this.model, { through: OrderProducts, as: 'orderProducts' });
  };

  include = [
    {
      model: ProductsModel.model,
      as: 'orderProducts',
      required: false,
    },
  ];
}

const Orders = new OrdersModel('Orders', {
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.JSON,
  },
  productsPrice: {
    type: DataTypes.INTEGER,
  },
  shippingPrice: {
    type: DataTypes.INTEGER,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
  },
});

export default Orders;
