import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { FollowUp, FollowUpSchema } from '../../follow-up/schema/follow-up.schema';  // Adjust the import path as necessary
@Schema()
export class Student extends Document {

  @Prop({ unique: true, required: true })
  rut: string;

  @Prop({ unique: false, required: true, enum: ['Primer Semestre', 'Segundo Semestre', 'Tercer Semestre', 'Cuarto Semestre', 'Quinto Semestre', 'Sexto Semestre', 'Séptimo Semestre', 'Octavo Semestre', 'Noveno Semestre', 'Décimo Semestre'] })
  semester: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  academicCharacter: string;

  @Prop({ required: true })
  healthReason: string;

  @Prop({ required: true })
  socialReason: string;

  @Prop({ required: true })
  remedialAction: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['Valparaíso', 'Santiago', 'San Felipe'] })
  sede: string;

  @Prop({ type: [FollowUpSchema], default: [] })
  follow_ups: Types.Array<FollowUp>;
}

export const StudentSchema = SchemaFactory.createForClass(Student);