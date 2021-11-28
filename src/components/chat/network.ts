import { Request, Router, Response } from "express";
import { errorResponse, successResponse } from "../../network/response";
const router = Router();
const controller = require("./controller");

router.get("/", async (req: Request, res: Response) => {
  try {
    const chatsList = await controller.getChats();
    successResponse(req, res, 200, chatsList);
  } catch (error) {
    console.error(error);
    errorResponse(req, res, 500, "Error inesperado");
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { users } = req.body;
    const newChat = await controller.addChat({ users });
    successResponse(req, res, 201, newChat);
  } catch (error) {
    errorResponse(req, res, 400, "Información inválida");
  }
});

export default router;
