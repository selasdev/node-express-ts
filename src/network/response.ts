import { Request, Response } from "express";
import { BaseResponse } from "../types/responses";

export const successResponse = (
  req: Request,
  res: Response,
  code: number,
  body: any
): void => {
  const responseToClient: BaseResponse = { body, error: null };

  res.status(code).send(responseToClient);
};

export const errorResponse = (
  req: Request,
  res: Response,
  code: number,
  error: any,
  message?: any
): void => {
  if (message) {
    console.error("[response error]: " + message);
  }

  const responseToClient: BaseResponse = { body: null, error };

  res.status(code).send(responseToClient);
};
