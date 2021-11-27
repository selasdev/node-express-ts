import { DBUser } from "./model";
import { addUserDB } from "./store";

export const addUser = (name: string, email: string): Promise<DBUser> => {
  if (typeof name === typeof email && typeof name === "string") {
      return addUserDB({name, email});
  } else {
    throw "Atributos inválidos para el usuario!";
  }
};
