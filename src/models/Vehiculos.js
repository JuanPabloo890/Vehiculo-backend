import { Schema, model } from "mongoose";

const vehiculoSchema = new Schema({
    marca:{
        type:String,
        require:true,
        trim:true
    },
    modelo:{
        type:String,
        require:true,
        trim:true
    },
    anio_fabricacion:{
        type:String,
        require:true,
        trim:true
    },
    placa:{
        type:String,
        require:true,
        trim: true
    },
    color:{
        type:String,
        require:true,
        trim: true
    },
    tipo_vehiculo:{
        type:String,
        require:true,
        trim: true
    },
    kilometraje:{
        type:String,
        require:true,
        trim: true
    },
    descripcion:{
        type:String,
        require:true,
        trim: true
    }
},{
    timestamps:true
})

export default model ('Vehiculos', vehiculoSchema)