import { Router, Request, Response} from "express";
import {Tarea} from '../modelos/tarea';

const tareaRutas = Router();

//Crear Usuario
tareaRutas.post('/crear',(req: Request,res: Response)=>{
    const tituloReq: string = req.body.tituloReq;
    const descripcionReq: string = req.body.descripcion;
    const idMateriaReq: string = req.body.idMateria;

    const tarea = {
        titulo: tituloReq,
        descripcion: descripcionReq,
        tarea: idMateriaReq,
    };
    
//Grabar USUARIO en BD
    Tarea.create(tarea).then((tareaDB: any) => {
        res.json({
            ok: true,
            tarea: tareaDB
        })
    }).catch((err: any) => {
        res.json({
            ok: false,
            err
        })
    })
});

//Ver pets
tareaRutas.get('/todos',(req: Request,res: Response)=>{
    Tarea.find({specialty: req.query.type}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas" + error);
    });
});


//Mostrar tareas por materia
tareaRutas.get('/:idMateria',(req: Request,res: Response)=>{
    const idMateria = req.params.idMateria;
    Tarea.find({idMateria: idMateria}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas por materia" + error);
    });
});
export default tareaRutas;