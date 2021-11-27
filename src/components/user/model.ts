import { Schema, model } from "mongoose";

export interface DBUser {
  name: string;
  email: string;
}

const mySchema = new Schema<DBUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const UserModel = model<DBUser>('User', mySchema);


