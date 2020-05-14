const UserService = require('../users/service');

const UserController = {};

UserController.findById = async(request, reply)=>{
   const { id } = request.params;
   const response = await UserService.findById(id);
   return reply.json(response);
}

UserController.delete = async(request, reply)=>{
   const { id } = request.params;
   const response = await UserService.delet(id);
   return reply.json(response);
}

UserController.findAll = async(request, reply)=>{
   const response = await UserService.findAll();
   return reply.json(response);
}

UserController.create = async(request, reply)=>{
   const { body } = request;
   const user = {...body}
   const response = await UserService.create(user);
   return reply.status(201).json(response);
}

UserController.update = async(request, reply)=>{
   const { body } = request;
   const { id } = request.params;
   const user = {...body}
   const response = await UserService.update(id, user);
   return reply.json(response);
}

module.exports = UserController;