import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Board, BoardSchema } from './board.schema';
import { Task, TaskSchema } from './task.schema';
import { User, UserSchema } from './user.schema';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Board.name, schema: BoardSchema },
      { name: Task.name, schema: TaskSchema },
    ]),
  ],
  exports: [MongooseModule],
  providers: [],
})
export class PersistentModule {}
