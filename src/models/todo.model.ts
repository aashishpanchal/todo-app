import {Prop, ModelOptions, ReturnModelType} from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Todo {
  @Prop({trim: true})
  todo: string;

  @Prop({default: false})
  completed: boolean;
}

export type TodoModel = ReturnModelType<typeof Todo>;
