
import DB from "mongoose";

DB.Promise = global.Promise;

export const initDB = (url: string): Promise<any> => {
    return DB.connect(url)
}

