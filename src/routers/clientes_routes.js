import {Router} from "express";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router()

import{
    listarClientes,
    detalleCliente,
    registrarCliente,
    actualizarCliente,
    eliminarCliente

}from '../controllers/clientes_controller.js'

router.get("/clientes",verificarAutenticacion, listarClientes);
router.get("/cliente/:id",verificarAutenticacion, detalleCliente);
router.post("/cliente/registro",verificarAutenticacion,registrarCliente);
router.put("/clientes/actualizar/:id",verificarAutenticacion,actualizarCliente);
router.delete("/cleinte/elminar/:id", verificarAutenticacion, eliminarCliente);

export default router