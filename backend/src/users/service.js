const Boom = require('@hapi/boom');
const UserModel = require('./model');

const findById = async (id)=> {
  const user = await UserModel.findById(id);
  if(!user) throw Boom.notFound(`User not fond for id: ${id}`) 
  return user;
};

const findAll = async ()=> {
  const user = await UserModel.findAll();
  return user;
};

const delet = async (id)=> {
  const user = UserModel.findById(id);
  
  if(!user) throw Boom.notFound(`User not fond for id: ${id}`) 
  await UserModel.delete(id);
  return user;
};

const create = async (user)=> {
  const newUser = await UserModel.create(user);
  if(!newUser) throw Boom.notFound(`User not created`) 
  return newUser;
};

const update = async (id, user)=> {
  const newUser = await UserModel.update(id, user);
  if(!newUser) throw Boom.notFound(`User not updated`) 
  return newUser;
};


module.exports = { findById, delet , findAll, create, update };