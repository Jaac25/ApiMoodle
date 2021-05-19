"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var tareaSchema = new mongoose_2.default.Schema({
    titulo: {
        type: String,
        required: [true, 'Tu nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, "Tu apellido es obligatorio"]
    },
    idMateria: {
        type: String,
        required: [true, "El id de materia es obligatorio"]
    }
});
exports.Tarea = mongoose_1.model('Tarea', tareaSchema);
