import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize("twitter_clone", "root", "", {
  dialect: "mssql",
  host: "localhost",
});

export default sequelize;
