let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Prova = require("./Prova");

// id, titulo, texto, valor, input, output
const Questao = con.define("Questao",
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

        texto: {
            type: DataTypes.STRING,
            allowNull: false

        },

        valor: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        
        // Não encontrei o tipo de dado "FILE" na documentação do Sequelize ó
        input: {
            type: DataTypes.STRING,
            allowNull: false

        },

        output: {
            type: DataTypes.STRING,
            allowNull: false

        }

    }
);


 
Questao.belongsToMany(Prova, {through: "ProvaContemQuestao", as: "provas"});
Prova.belongsToMany(Questao, {through: "ProvaContemQuestao", as: "questoes"});

module.exports = Questao;