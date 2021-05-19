"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var tarea_1 = require("../modelos/tarea");
var tareaRutas = express_1.Router();
//Crear Usuario
tareaRutas.post('/crear', function (req, res) {
    var tituloReq = req.body.tituloReq;
    var descripcionReq = req.body.descripcion;
    var idMateriaReq = req.body.idMateria;
    var tarea = {
        titulo: tituloReq,
        descripcion: descripcionReq,
        tarea: idMateriaReq,
    };
    //Grabar USUARIO en BD
    tarea_1.Tarea.create(tarea).then(function (tareaDB) {
        res.json({
            ok: true,
            tarea: tareaDB
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
//Ver pets
tareaRutas.get('/todos', function (req, res) {
    tarea_1.Tarea.find({ specialty: req.query.type }).then(function (tarea) {
        res.json(tarea);
    }).catch(function (error) {
        console.log("Error al mostrar las tareas" + error);
    });
});
//Mostrar tareas por materia
tareaRutas.get('/:idMateria', function (req, res) {
    var idMateria = req.params.idMateria;
    tarea_1.Tarea.find({ idMateria: idMateria }).then(function (tarea) {
        res.json(tarea);
    }).catch(function (error) {
        console.log("Error al mostrar las tareas por materia" + error);
    });
});
exports.default = tareaRutas;
