import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Board {
  @Prop()
  name: string;
}

export type BoardDocument = Board & Document;
export const BoardSchema = SchemaFactory.createForClass<Board>(Board);
