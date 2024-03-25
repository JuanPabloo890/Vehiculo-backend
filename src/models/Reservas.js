import mongoose, { Schema, model } from "mongoose";

const reservaSchema = new Schema({
    codigo:{
        type:Number,
        require:true,
        trim:true
    },
    descripcion:{
        type:String,
        require:true,
        trim:true
    },
    id_cliente:{
        type:mongoose.Types.ObjectId,
        ref: 'Cliente'
    },
    id_vehiculos:{
        type: mongoose.Types.ObjectId,
        ref: 'Vehiculo'
    }

},{
    timestamps:true
})

export default model ('Reservas', reservaSchema)