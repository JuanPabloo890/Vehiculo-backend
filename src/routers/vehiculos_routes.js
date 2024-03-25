import { Router } from "express";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router()

import { 
    listarVehiculo,
    detalleVehiculo,
    actualizarVehiculo,
    registrarVehiculo,
    eliminarVehiculo 
} from "../controllers/vehiculos_controller.js";

router.get("/vehiculos", verificarAutenticacion, listarVehiculo);
router.get("/vehiculo/:id", verificarAutenticacion, detalleVehiculo);
router.post("/vehiculo/registro", verificarAutenticacion, registrarVehiculo);
router.put("/vehiculo/actualizar/:id", verificarAutenticacion, actualizarVehiculo);
router.delete("/vehiculo/eliminar/:id", verificarAutenticacion, eliminarVehiculo);

export default router
