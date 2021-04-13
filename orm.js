require("dotenv").config();
let Sequelize = require("sequelize");

const con = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
            }
        },
            define: {
                freezeTableName: true

            }
        
    });
 
module.exports = con;