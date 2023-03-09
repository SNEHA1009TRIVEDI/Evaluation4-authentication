// require("dotenv").config();
// module.exports = {
//   development: {
//     username: "postgres",
//     password: "123456",
//     database: "database_dev",
//     host: "database",
//     dialect: "postgres",
//   },
// };

module.exports ={
  development: {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.AUTH_DATABASE,
    "host": process.env.AUTH_HOST,     
    "dialect": "postgres"
  },
  test: {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.AUTH_DATABASE,
    "host": process.env.AUTH_HOST,     
    "dialect": "postgres"
  },
  docker:{
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.AUTH_DATABASE,
    "host": process.env.AUTH_HOST,     
    "dialect": "postgres"
  }
}