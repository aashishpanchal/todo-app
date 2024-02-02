import {wrapper} from "./wrapper";
import {container} from "tsyringe";
import type {Constructor} from "./interfaces";

/**
 * create-routers function return function get handler of controller class
 */
export const createController = <T>(cls: Constructor<T>) => {
  // get instance of controller
  const instance = container.resolve(cls);

  // make router from instance
  const get = <K extends keyof T>(key: K) => {
    const handler = instance[key];
    // check handler is function or not
    if (typeof handler !== "function")
      throw new Error(`Handler ${key as string} is not a function`);
    // make router from handler
    return wrapper(handler.bind(instance)) as T[K];
  };

  return {get};
};
