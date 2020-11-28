import { Types } from 'mongoose';

export class CreateUserDto {
  readonly firstname: string;
  readonly lastname: string;
  readonly boardId: Types.ObjectId;
}
