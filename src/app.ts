import cors from "cors";
import express from "express";
import {apiRouter} from "./apis/api.router";
import {NotFoundError} from "./utils/errors";
import {connectDB} from "./configs/db.config";
import {serveStaticFile} from "./utils/serve-file";
import {errorHandler, logsHandler, validation} from "./middlewares";
import type {Application} from "express";

export default async function App() {
  // connect database to server
  await connectDB();

  // create express application
  const app: Application = express();

  // serve react build file
  serveStaticFile(app, {exclude: ["/api/(.*)"]});

  // middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use(logsHandler());

  // api router
  app.use("/api", apiRouter());

  // Not found
  app.all("*", (req) => {
    throw new NotFoundError(`Cannot ${req.method} ${req.originalUrl}`);
  });

  // errors handler middlewares
  app.use(validation);
  app.use(errorHandler);

  // return app
  return app;
}
