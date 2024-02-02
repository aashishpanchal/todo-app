import {Router} from "express";
import {todoRouter} from "./todo/todo.router";

export const apiRouter = () => {
  const router: Router = Router();

  // add all api version endpoints
  router.use("/todo", todoRouter());

  return router;
};
