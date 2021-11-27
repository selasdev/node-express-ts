import { DBMessage, MessageModel } from "./model";

const list: DBMessage[] = [];

export const addMessageDB = async (message: DBMessage): Promise<DBMessage> => {
  const myMessage = new MessageModel(message);
  const newMessage = await myMessage.save();
  return newMessage;
};

export const getMessagesDB = async (): Promise<DBMessage[]> => {
  const messages = await MessageModel.find();
  return messages;
};
