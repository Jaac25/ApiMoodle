"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presentar = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var presentarSchema = new mongoose_2.default.Schema({
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
exports.Presentar = mongoose_1.model('Presentar', presentarSchema);
