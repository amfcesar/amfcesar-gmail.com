const db = require('../libs/db');

const User = {};

User.findById = (id)=> {
  return db('user').where({ id }).first();
}

User.findAll = ()=> {
  return db('user');
}

User.delete = (id)=> {
  return db('user').where('id', id).del();
}

User.create = async (user)=> {
    const { name, email } = user
    const [id] = await db('user')
                         .insert({name: `${name}`, 
                                  email: `${email}` })
    return User.findById(id);
}

User.update = async(id, user)=> {
  const { name, email } = user;
  await db('user')
          .where('id', '=', id)
          .update({
            name, email      
          })
          
  return User.findById(id);
}

module.exports = User;

