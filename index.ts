import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import Server from './clases/server';
import express from 'express';

import usuarioRutas from './rutas/estudianteRutas';
import authRoute from './rutas/authRoutes';
import profeRoutes from './rutas/profeRoutes';
import materiaRutas from './rutas/materiaRutas';
import tareaRutas from './rutas/tareaRutas';

const server = new Server();
const config = require("./config");

//Body parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//Cors
server.app.use((cors({ origin: true, credentials: true })));

//Rutas
server.app.use('/',authRoute)
server.app.use('/estudiante',usuarioRutas);
server.app.use('/profe',profeRoutes);
server.app.use('/materia',materiaRutas);
server.app.use('/tarea',tareaRutas);


//Conectar BD
mongoose.connect(
    config.MONGO,
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true, 
        useFindAndModify:false
    },
    (err) => {
        if(err) throw "error BDDDDDDD";
        console.log("Base de datos funcionando");
    }
)

//Levantar servidor
server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`)
})