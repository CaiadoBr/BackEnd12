let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Usuario = require("./Usuario");

// id, tipo. titulo, data, duracao
const Competicao = con.define("Competicao",
    {

        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        titulo: {
            type: DataTypes.STRING,
            allowNull: false

        },

        data: {
            type: DataTypes.DATE,
            allowNull: false

        },

        duracao: {
            type: DataTypes.INTEGER,
            allowNull: false

        }
    }
);

module.exports = Competicao;