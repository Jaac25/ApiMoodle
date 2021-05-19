import {Schema, model, Document} from 'mongoose';

import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema<ITarea>({
    titulo: {
        type:String,
        required: [true, 'Tu nombre es obligatorio']
    },
    descripcion: {
        type:String,
        required: [true, "Tu apellido es obligatorio"]
    },
    idMateria: {
        type: String,
        required: [true, "El id de materia es obligatorio"]
    }
});

interface ITarea extends Document{
    titulo: string;
    descripcion: string;
    idMateria: string;
}

export const Tarea = model<ITarea>('Tarea',tareaSchema);