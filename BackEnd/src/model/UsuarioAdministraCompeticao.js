let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Usuario = require("./Usuario");
const Competicao = require("./Competicao");

const UsuarioAdministraCompeticao = con.define("UsuarioAdministraCompeticao",
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
        }
    }
);

Usuario.belongsToMany(Competicao, {through: UsuarioAdministraCompeticao});
Competicao.belongsToMany(Usuario, {through: UsuarioAdministraCompeticao});

module.exports = UsuarioAdministraCompeticao;