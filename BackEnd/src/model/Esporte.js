let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");



const Esporte = con.define("Esporte",
    {

       id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        EsporteNome: {
            type: DataTypes.STRING,
            allowNull: false

        },

    }
);

module.exports = Esporte;