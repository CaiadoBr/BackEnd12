let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");




const Organizador = con.define("Organizador",
    {

      OrganizadorId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            
        },



    }
);

// relacionamento "Organiza"
Organizador.belongsTo(Evento);
Organizador.hasMany(Evento);



module.exports = Organizador;