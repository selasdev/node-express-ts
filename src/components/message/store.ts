import { resolve } from "path/posix";
import { DBMessage, MessageModel } from "./model";

export const addMessageDB = async (message: DBMessage): Promise<DBMessage> => {
  const myMessage = new MessageModel(message);
  const newMessage = await myMessage.save();
  return newMessage;
};

export const getMessagesDB = async (user?: string, chat?: string,): Promise<DBMessage[]> => {
  let filter: Record<string, string> = {};
  if (typeof user === "string") {
    filter.user = user;
  }
  if (typeof chat === "string") {
    filter.chat = chat;
  }
  return new Promise((resolve, reject) => {
    MessageModel.find(filter)
      .populate("user")
      .exec((err, populated) => {
        if (err) {
          console.error(err);
          reject("Error populando");
        } else {
          resolve(populated);
        }
      });
  });
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

export const deleteMessageDB = async (id: string): Promise<DBMessage> => {
  try {
    return (await MessageModel.findByIdAndDelete(id)) as DBMessage;
  } catch (err) {
    console.error(err);
    throw "No se ha podido realizar la petición";
  }
};
