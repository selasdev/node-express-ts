import { Router, Request, Response } from "express";
import { successResponse, errorResponse } from "../../network/response";
import { checkIfHasError } from "../../util/query";
import { addMessage, getMessages } from "./controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const messages = await getMessages();
    successResponse(req, res, 200, { messages });
  }catch(error){
    errorResponse(req, res, 500, error)
  }
});

router.post("/", async (req: Request, res: Response) => {
    try {
      const responseMessage = await addMessage(req.body?.user, req.body?.message);
      successResponse(req, res, 201, responseMessage);
    } catch (error) {
      errorResponse(req, res, 500, error)
    }
});

router.delete("/", (req: Request, res: Response) => {
  if (!checkIfHasError(req)) {
    successResponse(req, res, 200, "Mensaje borrado con éxito");
  } else {
    errorResponse(req, res, 500, "No se pudo borrar el mensajes");
  }
});

export default router;
