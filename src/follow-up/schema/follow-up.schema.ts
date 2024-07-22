import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class FollowUp extends Document {
  @Prop({ unique: true, required: true, default: () => new Types.ObjectId() }) 
  follow_up_id: string;
  
  @Prop({ required: true })
  date: Date;

  @Prop()
  notes: string;

  @Prop()
  place: string;
  
  @Prop()
  campus: string;

  @Prop()
  grades: number;

  @Prop()
  attendance: number;

  @Prop()
  participation: string;

  @Prop()
  other: string;

  @Prop()
  justification: string;

  @Prop()
  comprehensionProblems: string;

  @Prop()
  lackOfPriorKnowledge: string;

  @Prop()
  healthReasons: string;

  @Prop()
  socialReasons: string;

  @Prop()
  otherReasons: string;

  @Prop()
  remedialActions: string;
}

export const FollowUpSchema = SchemaFactory.createForClass(FollowUp);
