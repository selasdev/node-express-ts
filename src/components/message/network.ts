import { Router, Request, Response } from "express";
import { successResponse, errorResponse } from "../../network/response";
import {
  addMessage,
  deleteMessage,
  getMessages,
  patchMessage,
} from "./controller";
const multer = require("multer");
const path = require("path");
const router = Router();

const storage = multer.diskStorage({
  destination: function (_: any, __: any, cb: any) {
    cb(null, "public/files/");
  },
  filename: function (_: any, file: any, cb: any) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  dest: "public/files/",
  storage,
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const userFilter = req.query?.user;
    const chatFilter = req.query?.chat;
    const messages = await getMessages(
      userFilter as string,
      chatFilter as string
    );
    successResponse(req, res, 200, { messages });
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

router.post("/", upload.single("file"), async (req: Request, res: Response) => {
  try {
    console.log((req as any).file);
    const responseMessage = await addMessage(
      req.body?.chat,
      req.body?.user,
      req.body?.message,
      (req as any).file
    );
    successResponse(req, res, 201, responseMessage);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const responseMessage = await patchMessage(req.params?.id, req.body?.text);
    successResponse(req, res, 200, responseMessage);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const responseMessage = await deleteMessage(req.params?.id);
    successResponse(req, res, 200, responseMessage);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

export default router;
