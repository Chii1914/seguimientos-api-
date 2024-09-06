import { IsString, IsDate, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateFollowUpDto {

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  notes: string;

  @IsOptional() 
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
}

/*
1. Escribir correo a Asistente Social y pedir cita (ESPECIFIQUE PARA QUÉ DERIVA A LA ASISTENTE SOCIAL)
2. Ajuste o flexibilidad académica otorgada (ESPECIFIQUE CUAL/CUALES)
3. Se le solicita documento de respaldo (SEÑALE CUÁL/CUALES) 
4. Alumno manifiesta no aceptar indicaciones otorgadas en entrevista (Breve relato)
5. Otro (especificar) */
export class AddFollowUpDto {
  follow_up: CreateFollowUpDto;
}
