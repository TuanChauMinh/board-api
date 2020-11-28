import { CreateTaskDto, UpdateTaskDto } from '@app/dto';
import { Task, TaskDocument } from '@app/persistent';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {}

  create(createTaskDto: CreateTaskDto) {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const updated = await this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
    return updated;
  }

  findAll() {
    return this.taskModel.find().populate('joined').populate('board').exec();
  }

  findByBoardId(id: string) {
    return this.taskModel.find({ board: id }).populate('joined').populate('board').exec();
  }
}
