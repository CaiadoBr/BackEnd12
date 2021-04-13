let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Jogador = require("./Jogador");
const Competicao = require("./Competicao");

const Time = con.define("Time",
    {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        
        Nome: {
            type: DataTypes.STRING,
            primaryKey: False,
            
        }
        
    }
);

// Time tem vários jogadores
Time.belongsTo(Jogador);
Time.hasMany(Jogador);

module.exports = Time;