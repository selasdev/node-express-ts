const socketIO = require("socket.io");
const socket: Record<string, any> = {};

const connect = (server: any) => {
    socket.io = socketIO(server);
}

module.exports = {
    connect,
    socket
}

