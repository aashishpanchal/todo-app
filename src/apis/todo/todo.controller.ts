import {injectable} from "tsyringe";
import {ApiRes} from "@/utils/router";
import {TodoDto} from "./dto/todo.dto";
import {TodoService} from "./todo.service";
import {CreateTodoDto} from "./dto/create.dto";
import {UpdateTodoDto} from "./dto/update.dto";
import type {Request} from "express";

@injectable()
export class TodoController {
  constructor(private todoService: TodoService) {}

  async create(req: Request) {
    // validate data
    const data = CreateTodoDto.parse(req.body);
    // create todo
    const todo = await this.todoService.create(data);
    // return response
    return ApiRes.Created(todo, "Add new todo successfully", TodoDto);
  }

  async findAll() {
    // find todo
    const todo = await this.todoService.findAll();
    // return response
    return ApiRes.Ok(todo, "All Todo get successfully", TodoDto.array());
  }

  async findOne(req: Request) {
    // get id from params
    const {id} = req.params;
    // find todo
    const todo = await this.todoService.findOne(id);
    // return response
    return ApiRes.Ok(todo, "Todo Get successfully", TodoDto);
  }

  async update(req: Request) {
    // get id from params
    const {id} = req.params;
    // validate data
    const data = UpdateTodoDto.parse(req.body);
    // update todo
    const todo = await this.todoService.update(id, data);
    // return response
    return ApiRes.Ok(todo, "Todo update successfully", TodoDto);
  }

  async delete(req: Request) {
    // get id from params
    const {id} = req.params;
    // delete todo
    const todo = await this.todoService.delete(id);
    // return response
    return ApiRes.Ok(todo, "Todo deleted successfully", TodoDto);
  }
}
