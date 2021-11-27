import { Schema, model } from "mongoose";

export interface DBMessage {
  user: string;
  message: string;
  date: Date;
}

const mySchema = new Schema<DBMessage>({
  user: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, required: true },
});

export const MessageModel = model<DBMessage>('Message', mySchema);


