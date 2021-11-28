import { Schema, model } from "mongoose";

export interface DBChat {
  users: Schema.Types.ObjectId[];
  email: string;
}

const mySchema = new Schema<DBChat>({
  users: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

export const ChatModel = model<DBChat>('Chat', mySchema);


