import { Router, Request, Response } from "express";
import { successResponse, errorResponse } from "../../network/response";
import { addMessage, deleteMessage, getMessages, patchMessage } from "./controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const userFilter = req.query?.user;
    const messages = await getMessages(userFilter as string);
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

router.patch("/:id", async(req: Request, res: Response) => {
  try {
    const responseMessage = await patchMessage(req.params?.id, req.body?.text);
    successResponse(req, res, 200, responseMessage);
  }catch(error){
    errorResponse(req, res, 500, error);
  }
})

router.delete("/:id", async (req: Request, res: Response) => {
  try{
    const responseMessage = await deleteMessage(req.params?.id)
    successResponse(req, res, 200, responseMessage)
  }catch(error) {
    errorResponse(req, res, 500, error);
  }
});

export default router;
