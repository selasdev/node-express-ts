import { DBChat } from "./model";

import { ChatModel } from "./model";

async function addChat(chat: DBChat) {
  try {
    const myChat = new ChatModel(chat);
    return await myChat.save();
  } catch (error) {
    console.error(error);
    throw new Error("Error saving");
  }
}

async function getChats() {
  try {
    return await ChatModel.find().populate("users").exec();
  } catch (error) {
    console.error(error);
    throw new Error("Unexpected error");
  }
}

async function getChatsByUser(userid: string) {
  try {
    let filter = { users: userid };
    return await ChatModel.find(filter as any).populate("users").exec();
  } catch (error) {
    console.error(error);
    throw new Error("Unexpected error");
  }
}

module.exports = {
  addChat,
  getChats,
  getChatsByUser,
};
