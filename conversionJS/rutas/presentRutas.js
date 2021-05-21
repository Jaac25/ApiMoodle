"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var presentarTarea_1 = require("../modelos/presentarTarea");
var presentarRutas = express_1.Router();
//Crear Usuario
presentarRutas.post('/crear', function (req, res) {
    var idTareaReq = req.body.idTarea;
    var idEstudianteReq = req.body.idEstudiante;
    var file = req.file;
    var tarea = {
        idTarea: idTareaReq,
        idEstudiante: idEstudianteReq,
        archivo: {
            fileName: file.filename,
            url: file.path,
        }
    };
    //Grabar USUARIO en BD
    presentarTarea_1.Presentar.create(tarea).then(function (tareaDB) {
        res.json({
            ok: true,
            presentada: tareaDB
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
//Ver materias 
presentarRutas.get('/todos', function (req, res) {
    presentarTarea_1.Presentar.find({ specialty: req.query.type }).then(function (tarea) {
        res.json(tarea);
    }).catch(function (error) {
        console.log("Error al mostrar las tareas" + error);
    });
});
//Mostrar tareas por materia
presentarRutas.get('/:idMateria', function (req, res) {
    var idMateria = req.params.idMateria;
    presentarTarea_1.Presentar.find({ idMateria: idMateria }).then(function (tarea) {
        res.json(tarea);
    }).catch(function (error) {
        console.log("Error al mostrar las tareas por materia" + error);
    });
});
//Mostrar tareas por estudiante
presentarRutas.get('/:idEstudiante', function (req, res) {
    var idEstudiante = req.params.idEstudiante;
    presentarTarea_1.Presentar.find({ idEstudiante: idEstudiante }).then(function (tarea) {
        res.json(tarea);
    }).catch(function (error) {
        console.log("Error al mostrar las tareas por estudiante" + error);
    });
});
//Mostrar tareas por estudiante y materia
presentarRutas.get('/:idEstudiante/:idMateria', function (req, res) {
    var idMateria = req.params.idMateria;
    var idEstudiante = req.params.idEstudiante;
    presentarTarea_1.Presentar.find({ idMateria: idMateria, idEstudiante: idEstudiante }).then(function (tarea) {
        res.json(tarea);
    }).catch(function (error) {
        console.log("Error al mostrar las tareas por estudiante" + error);
    });
});
exports.default = presentarRutas;
