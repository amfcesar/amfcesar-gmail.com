const UserController = require('../users/controller');

module.exports = (app) => {
   app.get("/user/:id", UserController.findById);
   app.delete("/user/:id", UserController.delete);
   app.get("/user", UserController.findAll);
   app.post("/user", UserController.create);
   app.put("/user/:id", UserController.update);
}

