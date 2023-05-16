import userRoutes from './userRoutes.js'
import propertyRouter from './propertyRoutes.js'

//Fetch routes
const configureRoutes = (app) => {
    app.use("/users", userRoutes)
    app.use("/properties", propertyRouter)

}


export default { configureRoutes };