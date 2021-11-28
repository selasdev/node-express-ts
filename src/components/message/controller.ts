import { ObjectId } from "mongoose";
import { DBMessage } from "./model";
import { addMessageDB, deleteMessageDB, getMessagesDB, updateMessageDB } from "./store";

export const addMessage = async (
  user: string,
  message: string
): Promise<DBMessage> => {
  if (typeof user === "string" && typeof message === "string") {
    const newMessage: DBMessage = {
      user: user as unknown as ObjectId,
      message: message,
      date: new Date(),
    };

    const resultMessage = await addMessageDB(newMessage);
    return resultMessage;
  } else {
    throw "Los datos de entrada son incorrectos";
  }
};

export const getMessages = async (user?: string): Promise<DBMessage[]> => {
  return await getMessagesDB(user);
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
