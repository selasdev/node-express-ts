export interface DBMessage {
    user: string;
    message: string;
    date: Date;
  }

const list: DBMessage[] = [];

export const addMessageDB = (message: DBMessage): void => {
    list.push(message);
}

export const getMessagesDB = (): DBMessage[] => {
    return list;
}