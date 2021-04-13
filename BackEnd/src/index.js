require('dotenv').config()
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const Esporte = require('./model/Esporte');
const Evento = require('./model/Evento');
const Jogador = require('./model/Jogador');
const Organizador = require('./model/Organizador');
const Posicao = require('./model/Posicao');
const Time = require('./model/Time');

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



  Route("/Esporte",app, new Service(Esporte), authorization);
  Route("/Evento",app, new Service(Evento), authorization);
  Route("/Jogador",app, new Service(Jogador), authorization);
  Route("/Organizador",app, new Service(Organizador), authorization);
  Route("/Posicao",app, new Service(Posicao), authorization);
  Route("/Time",app, new Service(Time), authorization);
 

async function hash(senha){
  return await bcryptjs.hash(senha, 10);
  
}

  app.post("/cadastrar", async (req, res) => {
    const {nome, email, senha} = req.body;
    const Jogador = Jogador.create({MatriculaId, nome, TimeId, email, senha:(await hash(senha))});
    usu.senha = undefined;
    res.send(usu);
  });

  app.post("/autenticar", async (req, res) => {

    const {email, senha} = req.body;
    const Jog = await Jogador.findOne({
      where: {
        email
        }
    });
    if (!jog || !senha) {
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