import { Schema, model } from "mongoose";

export interface DBMessage {
  user: Schema.Types.ObjectId;
  message: string;
  date: Date;
}

const mySchema = new Schema<DBMessage>({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  message: { type: String, required: true },
  date: { type: Date, required: true },
});

export const MessageModel = model<DBMessage>('Message', mySchema);


