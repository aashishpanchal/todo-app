import {Todo} from "./todo.model";
import {container} from "tsyringe";
import {getModelForClass} from "@typegoose/typegoose";

// get model
export const getModel = (model: string) => container.resolve(model);

// register model
const registerModel = <T extends new (...args: any[]) => any>(model: T) =>
  container.registerInstance(model.name, getModelForClass(model));

// user model
registerModel(Todo);
