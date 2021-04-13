let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Evento = require("./Evento");



const Organizador = con.define("Organizador",
    {

      OrganizadorId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {

                model: Usuario,
                key: "id"
            }
        },



    }
);

// relacionamento "Organiza"
Organizador.belongsTo(Evento);
Organizador.hasMany(Evento);



module.exports = Organizador;