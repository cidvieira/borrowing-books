const uuid = require('uuid').v4
const bcrypt = require('bcrypt')

const usersModel = [
  { id: '1', name: 'Jorgito', email: 'jorgito@email.com', password: '123456' },
  { id: '2', name: 'Carlito', email: 'carlito@email.com', password: '0000' }
]

module.exports = {
  getAllUsers: () => usersModel,

  getUserById: (id) => usersModel.find(user => user.id === id),

  getUserByEmail: (email) => usersModel.find(user => user.email === email),

  createUser: (name, email, password) => {
    const newUser = {
      id: uuid(),
      name,
      email,
      password: bcrypt.hashSync(password, 10)
    }
    usersModel.push(newUser)
    return newUser
  }
}