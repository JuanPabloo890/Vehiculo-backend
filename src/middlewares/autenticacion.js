import jwt  from "jsonwebtoken";
import Usuarios from "../models/Usuarios.js";

const verificarAutenticacion = async(req, res, next) =>{
    if(!req.headers.authorization) return res.status(400).json({mgs: "Lo siento debes tener un token"})
    const {authorization} = req.headers
    try {
        const {id} = jwt.verify(authorization.split(' ')[1], process.env.JWT_SECRET)
        req.UsuariosBDD = await Usuarios.findById(id).lean().select("-password")
        next()
    } catch (error) {
        const e = new Error("Formato de token invalido")
        return res.status(404).json({mgs: e.message})
    }
}

export default verificarAutenticacion