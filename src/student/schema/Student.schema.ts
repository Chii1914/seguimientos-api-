import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { FollowUp, FollowUpSchema } from '../../follow-up/schema/follow-up.schema';  

@Schema()
export class Student extends Document {

  @Prop({ unique: true, required: true })
  rut: string;

  @Prop({ unique: true, required: true, enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'K'] })
  df: string;

  @Prop({ unique: false, required: true, enum: ['Primer Semestre', 'Segundo Semestre', 'Tercer Semestre', 'Cuarto Semestre', 'Quinto Semestre', 'Sexto Semestre', 'Séptimo Semestre', 'Octavo Semestre', 'Noveno Semestre', 'Décimo Semestre'] })
  semester: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  location: string;
  
  @Prop({ required: true })
  remedialAction: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  secondName: string;

  @Prop({ required: true })
  fatherLastName: string;

  @Prop({ required: true })
  motherLastName :string

  @Prop({ required: true, enum: ['Valparaíso', 'Santiago', 'San Felipe'] })
  sede: string;

  @Prop({ type: [FollowUpSchema], default: [] })
  follow_ups: Types.Array<FollowUp>;

  //Motivos de ingreso 

  //Consumo problemático de sustanacias
  @Prop({ required: true })
  consumoSustancias: Boolean;
  @Prop({ required: true })
  justConsumoSustancias: String;

  //Convivencia y buen trato en la carrera
  @Prop({ required: true })
  convivencia: Boolean;
  @Prop({ required: true })
  justConvivencia: String;

  //Emocional y académico
  @Prop({ required: true })
  emocionalYAcademico: Boolean;
  @Prop({ required: true })
  justEmocionalYAcademico: String;

  //Solo emocional
  @Prop({ required: true })
  emocional: Boolean;
  @Prop({ required: true })
  justEmocional: String;

  //Solo académico
  @Prop({ required: true })
  academico: Boolean;
  @Prop({ required: true }) 
  justAcademico: String;

  //Uv inclusiva (neurodivergencia) con autorización del estudiante
  @Prop({ required: true })
  uvinclusiva: Boolean;
  @Prop({ required: true })
  justUvinclusiva: String;

  //Violencia física-psicológica, abuso
  @Prop({ required: true })
  abuso: Boolean;
  @Prop({ required: true })
  justAbuso: String;

  //Económicos
  @Prop({ required: true })
  economicos: Boolean;
  @Prop({ required: true })
  justEconomicos: String;

  //Económico, emocional y académico
  @Prop({ required: true })
  economicoEmocionalAcademico: Boolean;
  @Prop({ required: true }) 
  justEconomicoEmocionalAcademico: String;

  //Económicos y emoconal 
  @Prop({ required: true })
  economicoEmocional: Boolean;
  @Prop({ required: true })
  justEconomicoEmocional: String;

  //Económico y académico
  @Prop({ required: true })
  economicoAcademico: Boolean;
  @Prop({ required: true })
  justEconomicoAcademico: String;

}

export const StudentSchema = SchemaFactory.createForClass(Student);
