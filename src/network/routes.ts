import { Application } from "express";
import messageRoutes from "../components/message/network"
import userRoutes from "../components/user/network"
import chatRoutes from "../components/chat/network"

const routes = (server: Application) => {
  server.use("/message", messageRoutes);
  server.use("/user", userRoutes);
  server.use("/chat", chatRoutes);
};

export default routes;
