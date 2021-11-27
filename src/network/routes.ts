import { Application } from "express";
import messageRoutes from "../components/message/network"
import userRoutes from "../components/user/network"

const routes = (server: Application) => {
  server.use("/message", messageRoutes);
  server.use("/user", userRoutes);
};

export default routes;
