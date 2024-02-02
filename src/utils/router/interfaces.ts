import type {Request, Response, NextFunction} from "express";

// requestHandler type
export type ReqHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => any;

// Define the request context handler type
export type ReqCtxHandler<T> = (
  context: T,
  req: Request,
  res: Response,
  next: NextFunction
) => any;

// Define the constructor type
export type Constructor<T> = new (...args: any[]) => T;

// Define the context type
export type Context<T extends Constructor<any>[]> = {
  [K in keyof T]: InstanceType<T[K]>;
};
