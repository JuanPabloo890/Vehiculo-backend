import {Router} from 'express';
import verificarAutenticacion from '../middlewares/autenticacion.js';

const router = Router()

import{
    loginUser,
    perfil,
    registro

}from '../controllers/usuarios_controller.js'

router.post('/login', loginUser)
router.post('/registro', registro)
router.get('/perfil', verificarAutenticacion, perfil)

export default router
