import {Messages} from "@/constants";
import {injectable, inject} from "tsyringe";
import {Todo, type TodoModel} from "@/models";
import {BadRequestError} from "@/utils/errors";
import type {CreateTodoDto} from "./dto/create.dto";
import type {UpdateTodoDto} from "./dto/update.dto";

@injectable()
export class TodoService {
  constructor(@inject(Todo.name) private todoModel: TodoModel) {}

  async create(data: CreateTodoDto) {
    // create new todo
    return this.todoModel.create(data);
  }

  async update(id: string, data: UpdateTodoDto) {
    // find todo by id and update
    const todo = await this.todoModel.findByIdAndUpdate(id, data, {new: true});
    // if todo not found then throw error
    if (!todo) throw new BadRequestError(Messages.TODO_NOT_FOUND);
    // update todo
    return todo;
  }

  async findOne(id: string) {
    // find todo by id
    const todo = await this.todoModel.findById(id);
    // if todo not found then throw error
    if (!todo) throw new BadRequestError(Messages.TODO_NOT_FOUND);
    // find todo
    return todo;
  }

  async findAll() {
    // find all todo
    return this.todoModel.find();
  }

  async delete(id: string) {
    // find todo by id
    const todo = await this.todoModel.findByIdAndDelete(id);
    // if todo not found then throw error
    if (!todo) throw new BadRequestError(Messages.TODO_NOT_FOUND);
    // delete todo
    return todo;
  }
}
