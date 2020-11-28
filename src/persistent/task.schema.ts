import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import { Board } from './board.schema';
import { User } from './user.schema';

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Schema({ timestamps: true })
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: String,
    enum: [TaskStatus.TODO, TaskStatus.IN_PROGRESS, TaskStatus.DONE],
    required: true,
  })
  status: TaskStatus;

  @Prop({ type: [{ type: Types.ObjectId, ref: User.name }] })
  joined: (User | Types.ObjectId | string)[];

  @Prop({ type: Types.ObjectId, ref: Board.name })
  board: Board | Types.ObjectId | string;
}

export type TaskDocument = Task & Document;
export const TaskSchema = SchemaFactory.createForClass<Task>(Task);
