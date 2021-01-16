const config = require('../config/config')
const { Sequelize } = require('sequelize');

const usrname = config.mysql.username;
const database = config.mysql.db;
const password = config.mysql.password;

const sequelize = new Sequelize({
  database: 'test',
  username: 'root',
  password: '',
  dialect: 'mysql',
});

/*const db = async function (){
  return await sequelize.authenticate();
}*/

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));



module.exports = sequelize;