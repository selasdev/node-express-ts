import { Router, Request, Response } from "express";
import { successResponse, errorResponse } from "../../network/response";
import { addUser, deleteUser, listUsers, updateUser } from "./controller";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const userList = await listUsers(
      req.query?.id as string,
      req.query?.name as string,
      req.query?.email as string
    );
    successResponse(req, res, 200, userList);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newUser = await addUser(req.body?.name, req.body?.email);
    successResponse(req, res, 201, newUser);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const patchedUser = await updateUser(
      req.params?.id as string,
      req.body?.name as string,
      req.body?.email as string
    );
    successResponse(req, res, 200, patchedUser);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedUser = await deleteUser(
      req.params?.id as string,
    );
    successResponse(req, res, 200, deletedUser);
  } catch (error) {
    errorResponse(req, res, 500, error);
  }
});

export default router;
