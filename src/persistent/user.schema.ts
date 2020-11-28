import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User {
  static colors = ['#007ACC', '#F7DF1E', '#1572B6', '#61DAFB', '#DD0031', '#d81b60', '#339933', '#E10098', '#5D4F85'];

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass<User>(User);
