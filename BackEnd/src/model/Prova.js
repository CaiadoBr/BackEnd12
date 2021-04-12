let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Competicao = require("./Competicao");

//id, titulo, nivel

const Prova = con.define("Prova",
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

        nivel: {
            type: DataTypes.STRING,
            allowNull: false

        },

        CompeticaoId: {
            type: DataTypes.INTEGER,
            references: {

                model: Competicao,
                key: "id"

            }

        }
    }
);


// relacionamento "composta"
Prova.belongsTo(Competicao);
Competicao.hasMany(Prova, {as: "provas"});



module.exports = Prova;