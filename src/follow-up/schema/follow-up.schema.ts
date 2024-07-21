import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class FollowUp extends Document {
  
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  notes: string;


  @Prop({ unique: true, required: true, default: () => new Types.ObjectId() }) // Ensure unique follow_up_id
  follow_up_id: string;
}

export const FollowUpSchema = SchemaFactory.createForClass(FollowUp);
