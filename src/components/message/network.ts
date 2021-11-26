import { Router, Request, Response } from "express";
import { successResponse, errorResponse } from "../../network/response";
import { checkIfHasError } from "../../util/query";

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

router.post("/", (req: Request, res: Response) => {
  if (!checkIfHasError(req)) {
    successResponse(req, res, 201, "El mensaje se ha creado");
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
