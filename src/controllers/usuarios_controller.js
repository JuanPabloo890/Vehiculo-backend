import Usuarios from "../models/Usuarios.js";
import generarJWT from "../helpers/crearJWT.js";

//Metodo para el login
const loginUser = async(req, res)=> {
    const {email,password} = req.body
    if (Object.values(req.body).includes(" ")) return res.status(400).json({msg:'Lo sentimos, debe llenar todos los campos'})
    const usuarioBDD = await Usuarios.findOne({email}).select("-__v -updatedAt -createdAt")
    if (!usuarioBDD) return res.status(404).json({msg:'Lo sentimos, el usuario no se encuentra registrado'})
    const verificarPassword = await usuarioBDD.matchPassword(password)
    if (!verificarPassword) return res.status(404).json({msg:'Lo sentimos, el password no es el correcto'})
    
    const token = generarJWT(usuarioBDD._id)
    
    const {nombre, apellido, _id} = usuarioBDD 
    res.status(200).json({
        _id,
        token,
        nombre,
        apellido,
        email: usuarioBDD.email
    })
}


const registro = async(req,res)=>{
    //desestructurar los campos
    const {email,password} = req.body
    //Validar todos los campos llenos
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    //Obtener el usuario de la BDD en base al email 
    const verificarEmailBDD = await Usuarios.findOne({email})
    //Validar que el email sea nuevo
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    
    //Crear la instancia del nuevo usuario
    const nuevoUsuario = new Usuarios(req.body)
    await nuevoUsuario.save()
    res.status(200).json({msg:"Cuenta registrada con exito!"})
}

const perfil = (req, res) => {
    if (req.UsuariosBDD) {
        delete req.UsuariosBDD.createdAt;
        delete req.UsuariosBDD.updatedAt;
        delete req.UsuariosBDD.__v;
        res.status(200).json(req.UsuariosBDD);
    } else {
        res.status(404).json({ msg: "Usuario no encontrado" });
    }
};


export{
    loginUser,
    registro,
    perfil
}