let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Usuario = require("./Usuario");
const Competicao = require("./Competicao");

const UsuarioJulgaCompeticao = con.define("UsuarioJulgaCompeticao",
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

Usuario.belongsToMany(Competicao, {through: UsuarioJulgaCompeticao});
Competicao.belongsToMany(Usuario, {through: UsuarioJulgaCompeticao});

module.exports = UsuarioJulgaCompeticao;