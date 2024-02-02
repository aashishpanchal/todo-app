import {Router} from "express";
import {createController} from "@/utils/router";
import {TodoController} from "./todo.controller";

export const todoRouter = () => {
  // create router
  const router: Router = Router();

  // create controller instance
  const controller = createController(TodoController);

  // initialize end points of router
  router
    .route("/")
    .get(controller.get("findAll"))
    .post(controller.get("create"));
  router
    .route("/:id")
    .put(controller.get("update"))
    .get(controller.get("findOne"))
    .delete(controller.get("delete"));

  return router;
};
