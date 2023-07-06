import { Request, Response, NextFunction } from 'express';

type Fn = (req: Request, res: Response, next: NextFunction) => void;

export const tryCatch =
  (fn: Fn) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
