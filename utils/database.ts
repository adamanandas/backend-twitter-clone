import { Sequelize } from "sequelize";

import * as dbConfig from "../src/config/database";

const dbDriver = dbConfig.dbDriver;
const dbName = dbConfig.dbName;
const dbHost = dbConfig.dbHost;
const dbUser = dbConfig.dbUser;
const dbPassword = dbConfig.dbPassword;

const sequelize: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDriver,
  host: dbHost,
});

export default sequelize;
