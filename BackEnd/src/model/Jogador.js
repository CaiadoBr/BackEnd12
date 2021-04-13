let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Posicao = require("./Posicao");
const Time = require("./Time");

// id, titulo, texto, valor, input, output
const Jogador = con.define("Jogador",
    {

        MatriculaId: { 
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

        },
         TimeId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {

                model: Usuario,
                key: "id"
            }
        },
    


    }
);


// Jogador tem 1 Posicao
Jogador.belongsTo(Posicao);
Jogadir.hasOne(Posicao);


// Jogador tem 1 Posicao
Jogador.belongsTo(Time);
Jogador.hasOne(Time);

module.exports = Jogador;