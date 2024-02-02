import type {
  Context,
  ReqHandler,
  Constructor,
  ReqCtxHandler,
} from "./interfaces";
import {HttpRes} from "./res";
import {container} from "tsyringe";

export function wrapper(func: ReqHandler): ReqHandler;

export function wrapper<T extends Constructor<any>[]>(
  func: ReqCtxHandler<Context<T>>,
  ...services: T
): ReqHandler;

/**
 * Wrapper of request handler
 */
export function wrapper<T extends Constructor<any>[]>(
  func: any,
  ...services: T
): ReqHandler {
  return async (req, res, next) => {
    // Create instances of services
    const context = await Promise.all(
      services.map(async (Service) => await container.resolve(Service))
    );

    // Call the wrapped handler function
    Promise.resolve(
      context.length ? func(context, req, res, next) : func(req, res, next)
    )
      .then((value: any) => {
        if (value instanceof HttpRes) res.status(value.statusCode).json(value);
        // check data if exist or not
        else if (value && value !== res) return res.send(value);
      })
      .catch(next);
  };
}
