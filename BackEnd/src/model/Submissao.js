let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Prova = require("./Prova");
const Questao = require("./Questao");
const Usuario = require("./Usuario");

// id, horario, resultado, questao, arquivo

const Submissao = con.define("Submissao",
    {

        id: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        horario: {
            type: DataTypes.DATE,
            allowNull: false

        },

        resultado: {
            type: DataTypes.STRING,
            allowNull: false

        },

        // como passa um arquivo js aqui??
        arquivo: {
            type: DataTypes.STRING,
            allowNull: false

        },

        QuestaoId: {
            type: DataTypes.INTEGER,
            references: {

                model: Questao,
                key: "id"

            }

        },


        ProvaId: {
            
            type: DataTypes.INTEGER,
            references: {

                model: Prova,
                key: "id"

            }

        },

        SubmissorId: {
            
            type: DataTypes.INTEGER,
            allowNull: false,

            references: {

                model: Usuario,
                key: "id"

            }

        },

        AvaliadorId: {
            
            type: DataTypes.INTEGER,
            references: {

                model: Usuario,
                key: "id"

            }

        }

    }
);

// relacionamento "contem"
Submissao.belongsTo(Questao);
Questao.hasMany(Submissao);

// relacionamento "pertence"
Submissao.belongsTo(Prova);
Prova.hasMany(Submissao);

// relacionamento "avalia"
Submissao.belongsTo(Usuario, {as:"avaliador"});
Usuario.hasMany(Submissao);

// relacionamento "envia"
Submissao.belongsTo(Usuario, {as:"submissor"});
Usuario.hasMany(Submissao);

module.exports = Submissao;