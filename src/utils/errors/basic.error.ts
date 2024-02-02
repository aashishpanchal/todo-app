import httpStatus from "http-status";
import {HttpError} from "./http.error";

/**
 * bad request error class
 */
export class BadRequestError extends HttpError {
  constructor(error: any, message = "Bad Request") {
    super(error, httpStatus.BAD_REQUEST, message);
  }
}

/**
 * not found error class
 */
export class NotFoundError extends HttpError {
  constructor(error: any, message = "Not Found") {
    super(error, httpStatus.NOT_FOUND, message);
  }
}

/**
 * server internal server error class
 */
export class InternalServerError extends HttpError {
  constructor(error: any, message = "Internal Server Error") {
    super(error, httpStatus.INTERNAL_SERVER_ERROR, message);
  }
}
