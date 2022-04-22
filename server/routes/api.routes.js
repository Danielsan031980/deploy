const ApiController = require("../controllers/api.controller");
const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');

module.exports = app => {

    app.post("/api/pelicula/create/", ApiController.createApi);
    app.get("/api/peliculas/", ApiController.getAllApi);
    app.get("/api/pelicula/:id", ApiController.getSingleApi);
    app.delete("/api/pelicula/delete/:id", ApiController.deleteApi);
    app.put("/api/pelicula/update/:id", ApiController.updateApi);



    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);
    //Para acceder a estas rutas hay que estar autenticado.
    app.get("/api/users", authenticate, UserController.getAll);
    app.get('/api/user/:id', authenticate, UserController.getUser);

  }