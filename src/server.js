// Requerir los módulos
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

import routerUsuarios from './routers/usuarios_routes.js'
import routerClientes from './routers/clientes_routes.js'
import routerReservas from './routers/reservas_routes.js'
import routerVehiculos from './routers/vehiculos_routes.js'

// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.port || 3000)
app.use(cors())

// Middlewares 
app.use(express.json())

// Rutas 
app.use('/api',routerUsuarios)
app.use('/api',routerClientes)
app.use('/api',routerReservas)
app.use('/api',routerVehiculos)

// Ruta no encontrada
app.use((req,res) => res.status(404).send('Endpoint no encontrado - 404'))

// Exportar la instancia de express por medio de app
export default app