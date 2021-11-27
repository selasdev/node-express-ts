import { DBUser, UserModel } from "./model";

export const addUserDB = (user: DBUser): Promise<DBUser> => {
    const myUser = new UserModel(user);
    return myUser.save();
}