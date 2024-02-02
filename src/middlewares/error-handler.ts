import config from "config";
import {logger} from "@/logger";
import {HttpError, InternalServerError} from "@/utils/errors";
import type {ErrorRequestHandler} from "express";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  // http-apis recognize errors
  if (error instanceof HttpError)
    return res.status(error.statusCode).send(error);

  // other error logs in server
  logger.error(error);

  // send response
  const message = config.get("app.is_dev")
    ? error.message
    : `Something went wrong!`;
  // console on error
  return res.status(500).send(new InternalServerError(message));
};
