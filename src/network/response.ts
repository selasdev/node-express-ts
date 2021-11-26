import { Request, Response } from "express";
import { BaseResponse } from "../types/responses";

exports.success = (
  req: Request,
  res: Response,
  code: number,
  body: any
): void => {
  const responseToClient: BaseResponse = { body, error: null };

  res.status(code).send(responseToClient);
};

exports.error = (
  req: Request,
  res: Response,
  code: number,
  error: any
): void => {
  const responseToClient: BaseResponse = { body: null, error };

  res.status(code).send(responseToClient);
};
