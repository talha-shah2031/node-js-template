// src/common/middleware/error.middleware.ts
import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  status?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log the error stack in development
  console.error(err.stack);

  // Send response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};
