import { execSync } from 'child_process';
import { Sequelize } from 'sequelize';

import config from '../config';
import { findFilesInDir } from '../lib/utils';


const { mysql } = config;

const db = new Sequelize(mysql.database, mysql.user || mysql.username, mysql.password, {
  host: mysql.host,
  dialect: 'mysql',
  port: mysql.port,
  logging: false,
});

export default db;

export const syncDB = async () => {
  console.log('Sync db started...');

  // 1. create
  execSync('sequelize db:create');

  // 2. migrate
  const modelsDictionary = {};
  const models = findFilesInDir('.', '.model.ts')
    .filter(file => file !== 'lib/base.model.ts')
    .map(file => require(`../${file}`).default)
    .map(model => {
      modelsDictionary[model.model.name] = model.model;
      return model;
    });
  // uncomment to enable cascade on delete:
  models.forEach(model => typeof model.associate === 'function' && model.associate(modelsDictionary));
  await db.sync({ alter: true });

  // 3. seed
  execSync('sequelize db:seed:all');

  console.log('Sync db completed.');
}
