interface DBMessage {
  user: string;
  message: string;
  date: Date;
}

export const addMessage = async (user: string, message: string) => {
  if (typeof user === "string" && typeof message === "string") {
    const newMessage: DBMessage = {
      user: user,
      message: message,
      date: new Date(),
    };

    return newMessage;
  } else {
      throw("Los datos de entrada son incorrectos")
  }
};
