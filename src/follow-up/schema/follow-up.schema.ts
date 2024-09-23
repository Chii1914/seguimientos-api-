import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class FollowUp extends Document {
  @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId(), unique: true })
  follow_up_id: string;
  
  @Prop({ required: true })
  date: Date;

  @Prop()
  notes: string;

  @Prop({ required: true })
  asistentaSocial: boolean;

  @Prop()
  justAsistentaSocial: string;

  @Prop({ required: true })
  ajusteAcademico: boolean;

  @Prop()
  justAjusteAcademico: string;

  @Prop({ required: true })
  documentoRespaldo: boolean;

  @Prop()
  justDocumentoRespaldo: string;

  @Prop({ required: true })
  noAceptaIndicaciones: boolean;

  @Prop()
  justNoAceptaIndicaciones: string;

  @Prop()
  otro: string;

  
}

/*
@IsBoolean()
  asistentaSocial: boolean; 

  @IsOptional()
  @IsString()
  justAsistentaSocial: string;

  @IsOptional()
  @IsBoolean()
  ajusteAcademico: boolean;

  @IsOptional()
  @IsString()
  justAjusteAcademico: string;

  @IsOptional()
  @IsBoolean()
  documentoRespaldo: boolean;

  @IsOptional()
  @IsString()
  justDocumentoRespaldo: string;

  @IsOptional()
  @IsBoolean()
  noAceptaIndicaciones: boolean;

  @IsOptional()
  @IsString()
  justNoAceptaIndicaciones: string;

  @IsOptional()
  @IsString()
  otro: string;
*/
export const FollowUpSchema = SchemaFactory.createForClass(FollowUp);
