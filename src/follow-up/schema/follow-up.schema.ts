import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FollowUp extends Document {
  @Prop({ required: true, unique: true })
  follow_up_id: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  notes: string;
}

export const FollowUpSchema = SchemaFactory.createForClass(FollowUp);
