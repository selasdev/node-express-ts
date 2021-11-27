import { DBMessage, addMessageDB, getMessagesDB } from "./store";

export const addMessage = async (user: string, message: string): Promise<DBMessage> => {
  if (typeof user === "string" && typeof message === "string") {
    const newMessage: DBMessage = {
      user: user,
      message: message,
      date: new Date(),
    };

    addMessageDB(newMessage);
    return newMessage;
  } else {
      throw("Los datos de entrada son incorrectos")
  }
};

export const getMessages = async (): Promise<DBMessage[]> => {
    return getMessagesDB();
}
