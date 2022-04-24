const ApiController = require("../controllers/api.controller");
const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');

module.exports = app => {

    app.post("/api/pirate/create/", ApiController.createP);
    // app.post("/api/pirate/create/", ApiController.createPirate);
    app.get("/api/pirates/", ApiController.getAllApi);
    app.get("/api/pirate/:id", ApiController.getSingleApi);
    app.delete("/api/pirate/delete/:id", ApiController.deleteApi);
    app.put("/api/pirate/update/:id", ApiController.updateApi);
    app.post("/api/pirate/changeSkill/:skill/:id",ApiController.changeSkill);

    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);
    //Para acceder a estas rutas hay que estar autenticado.
    app.get("/api/users", authenticate, UserController.getAll);
    app.get('/api/user/:id', authenticate, UserController.getUser);

  }