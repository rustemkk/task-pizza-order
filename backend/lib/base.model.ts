import { Sequelize } from 'sequelize';

import db from '../services/db.service';


export class BaseModel {
  static db: Sequelize = db;
  model;
  attributes;
  include;

  constructor(modelName: string, attributes) {
    this.model = db.define(modelName, attributes, { paranoid: true });
  }

  findById(id: number, include?) {
    const query = {
      attributes: this.attributes,
      include: include || this.include
    };
    return this.model.findOne({ ...query, where: { id } });
  }

  findAll(limit: number = 10, offset: number = 0) {
    const query = {
      attributes: this.attributes,
      include: this.include
    };
    return this.model.findAll({ ...query, limit, offset });
  }

  create(data) {
    return this.model.create(data);
  }

  async update(id: number, data) {
    await this.model.update(data, { where: { id } });
    return this.findById(id);
  }

  delete(id: number) {
    return this.model.destroy({ where: { id } });
  }

  getInstance(id: number) {
    return this.model.findOne({ where: { id } });
  }
}
