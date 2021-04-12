let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Usuario = require("./Usuario");
const Competicao = require("./Competicao");

// nivel, pontuacao

const UsuarioParticipaCompeticao = con.define("UsuarioParticipaCompeticao",
    {

        UsuarioId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {

                model: Usuario,
                key: "id"
            }
        },
        
        CompeticaoId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {

                model: Competicao,
                key: "id"
            }
        },
       
        nivel: {
            type: DataTypes.STRING,
            allowNull: false

        },

        pontuacao: {
            type: DataTypes.INTEGER,
            allowNull: false

        }

    }
);

Usuario.belongsToMany(Competicao, {through: UsuarioParticipaCompeticao});
Competicao.belongsToMany(Usuario, {through: UsuarioParticipaCompeticao});

module.exports = UsuarioParticipaCompeticao;