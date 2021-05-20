import { Router, Request, Response} from "express";
import {Presentar} from '../modelos/presentarTarea';

const presentarRutas = Router();

//Crear Usuario
presentarRutas.post('/crear',(req: Request,res: Response)=>{
    const idTareaReq: string = req.body.idTarea;
    const idEstudianteReq: string = req.body.idEstudiante;

    const file = req.file;

    const tarea = {
        idTarea: idTareaReq,
        idEstudiante: idEstudianteReq,
        archivo: {
            fileName: file.filename,
            url: file.path,
        }
    };
    
//Grabar USUARIO en BD
Presentar.create(tarea).then((tareaDB: any) => {
        res.json({
            ok: true,
            presentada: tareaDB
        })
    }).catch((err: any) => {
        res.json({
            ok: false,
            err
        })
    })
});

//Ver materias 
presentarRutas.get('/todos',(req: Request,res: Response)=>{
    Presentar.find({specialty: req.query.type}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas" + error);
    });
});


//Mostrar tareas por materia
presentarRutas.get('/:idMateria',(req: Request,res: Response)=>{
    const idMateria = req.params.idMateria;
    Presentar.find({idMateria: idMateria}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas por materia" + error);
    });
});

//Mostrar tareas por estudiante
presentarRutas.get('/:idEstudiante',(req: Request,res: Response)=>{
    const idEstudiante = req.params.idEstudiante;
    Presentar.find({idEstudiante: idEstudiante}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas por estudiante" + error);
    });
});

//Mostrar tareas por estudiante y materia
presentarRutas.get('/:idEstudiante/:idMateria',(req: Request,res: Response)=>{
    const idMateria = req.params.idMateria;
    const idEstudiante = req.params.idEstudiante;
    Presentar.find({idMateria: idMateria,idEstudiante: idEstudiante}).then(function(tarea: any) {
        res.json(tarea);
    }).catch(function(error: string){
        console.log("Error al mostrar las tareas por estudiante" + error);
    });
});

export default presentarRutas;