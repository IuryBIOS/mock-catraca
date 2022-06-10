import { Request, Response } from "express";
import { nanoid } from "nanoid";

export const loginController = (req: Request, res: Response) => {
  const session = nanoid();

  res.status(200).json({ session });
};
