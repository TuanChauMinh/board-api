import { TaskStatus } from '@app/persistent';

export class UpdateTaskDto {
  readonly status: TaskStatus;
  readonly joined: string[];
  readonly title: string;
}
