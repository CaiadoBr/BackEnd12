const con = require("./orm");

const Usuario = require("./model/Usuario");
const Competicao = require("./model/Competicao");
const Prova = require("./model/Prova");
const Questao = require("./model/Questao");
const Submissao = require("./model/Submissao");

const UsuarioAdministraCompeticao = require("./model/UsuarioAdministraCompeticao");
const UsuarioJulgaCompeticao = require("./model/UsuarioJulgaCompeticao");
const UsuarioParticipaCompeticao = require("./model/UsuarioParticipaCompeticao");

/* as classes estão com os relacionamentos, porém ainda há dúvidas!
    Ulgo helpa noi
    
*/

async function resetarBanco() {
    await con.sync({force: true});
}

async function sincronizarBanco() {
    await con.sync();
}

async function inserir() {
    await Competicao.create({titulo:"Olimpíada CODEsp de Informática", data:"2021-03-26T14:00:00.000Z", duracao: 180});
    await Prova.create({titulo:"Programação", nivel:"Sênior", CompeticaoId: 1});
    await Questao.create({titulo:"A idade de Dona Mônica", texto:"Dona Mônica é mãe de três filhos...", valor:100, input:"aaa", output:"bbb"});
    await Submissao.create({horario:"2021-03-26T14:30:00.000Z", resultado:"WRONG_ANSWER", arquivo:"idade.java", QuestaoId: 1, ProvaId: 1, SubmissorId: 1});
    
}

async function consultar() {
    let res = await Usuario.findAll();
    console.log(res);
}


 resetarBanco();
// sincronizarBanco();
// inserir();
// consultar();