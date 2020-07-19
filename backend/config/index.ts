import * as sequelizeConfig from './database';


const mysql = sequelizeConfig[process.env.NODE_ENV || 'development'];

const config = {
  mysql,
};

export default config;
