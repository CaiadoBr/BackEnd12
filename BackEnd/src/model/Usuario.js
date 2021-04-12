let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");

//id, nome, email, senha

const Usuario = con.define("Usuario",
    {

        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING,
            allowNull: false

        },

        email: {
            type: DataTypes.STRING,
            allowNull: false

        },

        senha: {
            type: DataTypes.STRING,
            allowNull: false

        }
    }
);

module.exports = Usuario;