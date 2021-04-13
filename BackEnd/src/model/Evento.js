let con = require("../orm");
let {Sequelize, DataTypes} = require("sequelize");
const Esporte = require("./Esporte");



const Evento = con.define("Evento",
    {

        idEvento: { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        DataPraticar: {
            type: DataTypes.DATE,
            allowNull: false

        },

        localizacao: {
            type: DataTypes.STRING,
            allowNull: false

        },

         times: {
            type: DataTypes.ARRAY,
            allowNull: false

        },

        EsporteId: {
            type: DataTypes.INTEGER,
            references: {

                model: Competicao,
                key: "EsporteId"

            }
         

        }
    }
);


// relacionamento "composta"
Eventos.belongsTo(Esporte);
Evento.hasMany(Esporte, {as: "Esporte"});





module.exports = Evento;