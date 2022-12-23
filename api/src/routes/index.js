const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const recipeRoute = require('./RecipeRoutes');
const dietRoute = require("./DietRoutes")
const welcomeRoute = require("./WelcomeRoute")

router.use("/recipes", recipeRoute)
router.use("/diets", dietRoute)
router.use("/", welcomeRoute)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
