import { DBUser } from "./model";
import { addUserDB, deleteUserDB, getUsersDB, updateUserDB } from "./store";

export const addUser = (name: string, email: string): Promise<DBUser> => {
  if (typeof name === typeof email && typeof name === "string") {
    return addUserDB({ name, email });
  } else {
    throw "Atributos inválidos para el usuario!";
  }
};

export const listUsers = (
  id?: string,
  name?: string,
  email?: string
): Promise<DBUser[]> => {
  return getUsersDB(id, name, email);
};

export const updateUser = (
  id: string,
  name?: string,
  email?: string
): Promise<DBUser> => {
  return updateUserDB(id, name, email);
};

export const deleteUser = (id: string): Promise<DBUser> => {
  return deleteUserDB(id);
};
