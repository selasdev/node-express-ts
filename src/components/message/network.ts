import { Router, Request, Response } from "express";
import { successResponse, errorResponse } from "../../network/response";
import { checkIfHasError } from "../../util/query";
import { addMessage } from "./controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (!checkIfHasError(req)) {
    successResponse(req, res, 200, "Lista de Mensajes");
  } else {
    errorResponse(
      req,
      res,
      500,
      "No se pudo obtener la lista de mensajes",
      "Es una simulación"
    );
  }
});

router.post("/", async (req: Request, res: Response) => {
  if (!checkIfHasError(req)) {
    try {
      const responseMessage = await addMessage(req.body?.user, req.body?.message);
      successResponse(req, res, 201, responseMessage);
    } catch (error) {
      errorResponse(req, res, 500, error)
    }
  } else {
    errorResponse(req, res, 500, "No se pudo crear el mensaje");
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
