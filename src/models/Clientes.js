import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
    cedula:{
        type:Number,
        require:true,
        trim:true,
        maxLength: 10
    },
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    apellido:{
        type:String,
        require:true,
        trim:true
    },
    ciudad:{
        type:String,
        require:true,
        trim: true
    },
    email:{
        type:String,
        require:true,
        trim: true,
        unique: true
    },
    direccion:{
        type:String,
        require:true,
        trim: true
    },
    telefono:{
        type:String,
        require:true,
        trim: true
    },
    fecha_nacimiento:{
        type:String,
        require:true,
        trim: true
    }
},{
    timestamps:true
})

export default model ('Clientes', clienteSchema)