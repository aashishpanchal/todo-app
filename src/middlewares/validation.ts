import httpStatus from "http-status";

import {ZodError} from "zod";
import {ErrorRequestHandler} from "express";
import {BadRequestError} from "@/utils/errors";

export const validation: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError)
    res
      .status(httpStatus.BAD_REQUEST)
      .json(new BadRequestError(err.flatten().fieldErrors, "Validation Error"));
  else _next(err);
};
