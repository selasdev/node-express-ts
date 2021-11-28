import { DBChat } from "./model"

const store = require('./store')

async function addChat(chat: DBChat) {
  try {
    if (!chat.users) {
      console.log('[ERROR] [CHAT CONTROLLER] No hay usuarios')
      throw new Error()
    }
    return await store.addChat(chat)
  } catch (error) {
    throw new Error('Datos incorrectos')
  }
}

async function getChats() {
  try {
    return await store.getChats()
  } catch (error) {
    throw new Error('Error al obtener los datos')
  }
}

module.exports = {
  addChat,
  getChats
}