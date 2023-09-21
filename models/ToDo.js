import { Schema, model } from "mongoose";

const toDoSchema = new Schema({
    texto: { type: String, required: true },
    done: { type: Boolean, default: false },
},
    {
        timestamps: true
    }
)

const coleccion = 'todo'
const ToDo = model(coleccion, toDoSchema)

export default ToDo