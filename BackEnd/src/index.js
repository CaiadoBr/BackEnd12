require('dotenv').config()
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const Usuario = require('./model/Usuario');
const Competicao = require('./model/Competicao');
const Prova = require('./model/Prova');
const Questao = require('./model/Questao');
const Submissao = require('./model/Submissao');
const UsuarioAdministraCompeticao = require('./model/UsuarioAdministraCompeticao');
const UsuarioJulgaCompeticao = require('./model/UsuarioJulgaCompeticao');
const UsuarioParticipaCompeticao = require('./model/UsuarioParticipaCompeticao');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authorization = require("./authorization");
const { Op } = require('sequelize');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.json({ message: 'CCM ativo!!!' })
});

/*
app.get("/usuario", async (req, res) => {
  let usuarios = await Usuario.findAll(); 
  res.json(usuarios);
});
app.get("/usuario/:id", async (req, res) => {
  let usuario = await Usuario.findByPk(req.params.id); 
  res.json(usuario);
});
app.get("/usuario/:id/nome", async (req, res) => {
    let usuario = await Usuario.findByPk(req.params.id); 
    res.json(usuario.nome);
  });
  app.get("/usuario/:id/email", async (req, res) => {
    let usuario = await Usuario.findByPk(req.params.id); 
    res.json(usuario.email);
  });
  */

  Route("/usuario",app, new Service(Usuario), authorization);
  Route("/competicao",app, new Service(Competicao), authorization);
  Route("/prova",app, new Service(Prova), authorization);
  Route("/questao",app, new Service(Questao), authorization);
  Route("/submissao",app, new Service(Submissao), authorization);
  Route("/administra",app, new Service(UsuarioAdministraCompeticao), authorization);
  Route("/julga",app, new Service(UsuarioJulgaCompeticao), authorization);
  Route("/participa",app, new Service(UsuarioParticipaCompeticao), authorization);

async function hash(senha){
  return await bcryptjs.hash(senha, 10);
  
}

  app.post("/cadastrar", async (req, res) => {
    const {nome, email, senha} = req.body;
    const usu = Usuario.create({nome, email, senha:(await hash(senha))});
    usu.senha = undefined;
    res.send(usu);
  });

  app.post("/autenticar", async (req, res) => {

    const {email, senha} = req.body;
    const usu = await Usuario.findOne({
      where: {
        email
        }
    });
    if (!usu || !senha) {
      res.status(400).send("Credenciais inválidas");

    } else if (bcryptjs.compareSync(senha, usu.senha)){
      const token = jwt.sign(
        {email},
        process.env.SECRET,
        {expiresIn:3600}

      );
      res.send({email, token});

    } else {
      res.status(400).send("Credenciais inválidas");

    }

  });

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})