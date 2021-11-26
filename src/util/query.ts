import {Request} from "express";

export const checkIfHasError = (req: Request) => {
    return req.query?.error === "true"
}