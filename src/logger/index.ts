import config from "config";
import winston from "winston";
import {prettyPrint} from "./formats";
import {LEVEL_LABEL, LEVELS} from "./constant";

class Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: LEVEL_LABEL,
      levels: LEVELS,
      format: prettyPrint(config.get("app.name")),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          level: "info",
          dirname: "logs",
          filename: "combined.log",
          format: winston.format.uncolorize(),
        }),
        new winston.transports.File({
          level: "error",
          dirname: "logs",
          filename: "errors.log",
          format: winston.format.uncolorize(),
        }),
      ],
    });
  }

  get winston() {
    return this.logger;
  }

  info(msg: any, ...meta: any[]) {
    this.logger.info(msg, meta);
  }

  warn(msg: any, ...meta: any[]) {
    this.logger.warn(msg, meta);
  }

  error(msg: any, ...meta: any[]) {
    this.logger.error(msg, meta);
  }

  debug(msg: any, ...meta: any[]) {
    this.logger.debug(msg, meta);
  }
}

export const logger = new Logger();
