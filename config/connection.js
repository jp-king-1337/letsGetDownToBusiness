require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
            decimalNumbers: true,
        },
    });


// console.log(DB_NAME, DB_USER, DB_PW);

module.exports = sequelize;
