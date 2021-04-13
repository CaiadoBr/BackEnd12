const con = require("./orm");

const Esporte = require("./model/Esporte");
const Evento = require("./model/Evento");
const Jogador = require("./model/Jogador");
const Organizador = require("./model/Organizador");
const Posicao = require("./model/Posicao");
const Time = require("./model/Time");





async function resetarBanco() {
    await con.sync({force: true});
}

async function sincronizarBanco() {
    await con.sync();
}

async function inserir() {
    await Evento.create({idEvento:1, data:"2021-04-09T16:00:00.000Z", localizaco: "Rua Antenor navarro Nº 567", Times:"São Paulo, Corinthias, Palmeiras, Santos", EsporteId= 1});
    await Esporte.create({id: 1 , EsporteNome:"Futsal"});
    await Jogador.create({MatriculaId: 7, nome:"Cio", email:"caio@caio.com.br", senha:"****", TimeId:"2"});
    await Time.create({id:2, nome:"Santos"});
    await Organizador.create({id: 1 ,});
    await Posicao.create({id:7, nome:"Ala"});
    
}

async function consultar() {
    let res = await Usuario.findAll();
    console.log(res);
}


 resetarBanco();
