import { Router } from "express";
import verificarAutenticacion from "../middlewares/autenticacion.js";

const router = Router()

import { 
    listarReserva,
    crearReserva,
    actualizarReserva,
    detalleReserva,
    eliminarReserva 
} from "../controllers/reservas_controller.js";

router.get("/reservas", verificarAutenticacion, listarReserva);
router.get("/reserva/:id", verificarAutenticacion, detalleReserva);
router.post("/reserva/registro", verificarAutenticacion, crearReserva);
router.put("/reserva/actualizar/:id", verificarAutenticacion, actualizarReserva);
router.delete("/reserva/eliminar/:id", verificarAutenticacion, eliminarReserva);

export default router



