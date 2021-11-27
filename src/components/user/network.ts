import { Router, Request, Response } from "express";
import { successResponse, errorResponse } from "../../network/response";
import { addUser } from "./controller";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = await addUser(req.body?.name, req.body?.email);
    successResponse(req, res, 201, newUser);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

export default router;
