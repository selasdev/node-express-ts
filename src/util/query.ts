import {Request} from "express";

exports.checkIfHasError = (req: Request) => {
    return req.query?.error === "true"
}