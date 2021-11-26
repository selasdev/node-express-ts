import { Application } from "express";
import messageRoutes from "../components/message/network"

const routes = (server: Application) => {
  server.use("/message", messageRoutes);
};

export default routes;
