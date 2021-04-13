let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");



const Posicao = con.define("Posicao",
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

       
    }
);
 
module.exports = Posicao;