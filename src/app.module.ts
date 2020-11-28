import { BoardsModule } from '@app/resources/boards';
import { TasksModule } from '@app/resources/tasks';
import { UsersModule } from '@app/resources/users';
import { PersistentModule } from '@app/persistent';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    PersistentModule,
    UsersModule,
    BoardsModule,
    TasksModule,
  ],
})
export class AppModule {}
