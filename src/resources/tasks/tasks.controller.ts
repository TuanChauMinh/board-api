import { CreateTaskDto, TaskQueryDto, UpdateTaskDto } from '@app/dto';
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  async update(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: string) {
    const updated = await this.tasksService.update(id, updateTaskDto);
    if (updated) {
      return updated;
    }
    throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
  }

  @Get()
  findAll(@Query() query: TaskQueryDto) {
    if (query.boardId) {
      return this.tasksService.findByBoardId(query.boardId);
    }
    return this.tasksService.findAll();
  }
}
