import { DBMessage, MessageModel } from "./model";

const list: DBMessage[] = [];

export const addMessageDB = async (message: DBMessage): Promise<DBMessage> => {
  const myMessage = new MessageModel(message);
  const newMessage = await myMessage.save();
  return newMessage;
};

export const getMessagesDB = async (user?: string): Promise<DBMessage[]> => {
  let filter: Record<string, string> = {};
  if(typeof(user) === "string"){
    filter.user = user;
  }
  const messages = await MessageModel.find(filter);
  return messages;
};

export const updateMessageDB = async (
  id: string,
  text: string
): Promise<DBMessage> => {
  const foundMessage = await MessageModel.findById(id);
  if (foundMessage) {
    foundMessage.message = text;
  } else {
    throw "No se ha encontrado el mensaje";
  }
  return await foundMessage.save();
};
