import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mydatabase', 'myuser', 'mypassword', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
