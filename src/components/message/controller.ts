import { ObjectId } from "mongoose";
const { socket } = require("../../socket");
import { DBMessage } from "./model";
import {
  addMessageDB,
  deleteMessageDB,
  getMessagesDB,
  updateMessageDB,
} from "./store";

export const addMessage = async (
  chat: string,
  user: string,
  message: string,
  file: any
): Promise<DBMessage> => {
  if (
    typeof chat === "string" &&
    typeof user === "string" &&
    typeof message === "string"
  ) {
    let fileUrl = file
      ? "http://localhost:3000/app/files/" + file.filename
      : "";

    const newMessage: DBMessage = {
      chat: chat as unknown as ObjectId,
      user: user as unknown as ObjectId,
      message: message,
      file: fileUrl,
      date: new Date(),
    };

    const resultMessage = await addMessageDB(newMessage);
    socket.io.emit("message", resultMessage);

    return resultMessage;
  } else {
    throw "Los datos de entrada son incorrectos";
  }
};

export const getMessages = async (
  user?: string,
  chat?: string
): Promise<DBMessage[]> => {
  return await getMessagesDB(user, chat);
};

export const patchMessage = async (
  id: string,
  text: string
): Promise<DBMessage> => {
  if (!id || !text) {
    throw "Información a modificar incompleta, chequear id/texto";
  }
  try {
    return await updateMessageDB(id, text);
  } catch (err) {
    console.error(err);
    throw "No se pudo encontrar el mensaje.";
  }
};

export const deleteMessage = async (id: string): Promise<DBMessage> => {
  if (!id) {
    throw "Mensaje no encontrado";
  }
  return await deleteMessageDB(id);
};
