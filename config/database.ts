import { Sequelize } from 'sequelize';

const dbHost = process.env.HOST || "localhost";
const dbPort = process.env.PORT || "3306";
const dbUser = process.env.USER || "myusername";
const dbPassword = process.env.PASSWORD || "mypassword";
const dbName = process.env.NAME || "mydatabase";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: parseInt(dbPort),
  dialect: 'mysql',
});

export default sequelize;
