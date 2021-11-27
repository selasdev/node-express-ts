import { DBUser, UserModel } from "./model";

export const addUserDB = (user: DBUser): Promise<DBUser> => {
  const myUser = new UserModel(user);
  return myUser.save();
};

export const getUsersDB = async (
  id?: string,
  name?: string,
  email?: string
): Promise<DBUser[]> => {
  let filter: Record<string, string> = {};
  if (typeof id === "string") {
    filter._id = id;
  }
  if (typeof name === "string") {
    filter.name = name;
  }
  if (typeof email === "string") {
    filter.email = email;
  }

  return await UserModel.find(filter);
};

export const updateUserDB = async (
  id: string,
  name?: string,
  email?: string
): Promise<DBUser> => {
    if(typeof id === "string") {
        const foundUser = await UserModel.findById(id);

        if(foundUser){
            if(typeof name === "string"){
                foundUser.name = name;
            }
            if(typeof email === "string"){
                foundUser.email = email;
            }
            return await foundUser.save();
        }else {
            throw "Usuario no encontrado"
        }
    }else {
        throw "Formato de ID inválido"
    }
};

export const deleteUserDB = async (
    id: string
  ): Promise<DBUser> => {
      if(typeof id === "string") {
          return (await UserModel.findByIdAndDelete(id)) as DBUser;
      }else {
          throw "Formato de ID inválido"
      }
  };
  
