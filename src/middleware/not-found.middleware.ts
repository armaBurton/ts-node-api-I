// src/middleware/not-found.middleware.ts
import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const message = "You must be lost my friend.";

  response.status(404).send(message);
};
