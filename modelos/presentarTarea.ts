import {Schema, model, Document} from 'mongoose';

import mongoose from 'mongoose';

const presentarSchema = new mongoose.Schema<IPresent>({
    idTarea: {
        type: String,
        required: [true, "El id de materia es obligatorio"]
    },
    idEstudiante: {
        type: String,
        required: [true, "El idEstudiante es obligatorio"]
    },
    archivo: {
        fileName: String,
        url: String,
    }
});

interface IPresent extends Document{
    idTarea: string;
    idEstudiante: string;
    archivo: {};
}

export const Presentar = model<IPresent>('Presentar',presentarSchema);