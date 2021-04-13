let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Usuario = require("./Usuario");


const Esporte = con.define("Esporte",
    {

        EsporteId: { 
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