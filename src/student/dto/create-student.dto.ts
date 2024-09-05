import { IsString, IsEnum, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsEmail, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFollowUpDto } from '../../follow-up/dto/create-follow-up.dto';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  rut: string;

  @IsString()
  @IsNotEmpty()
  df: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['Primer Semestre', 'Segundo Semestre', 'Tercer Semestre', 'Cuarto Semestre', 'Quinto Semestre', 'Sexto Semestre', 'Séptimo Semestre', 'Octavo Semestre', 'Noveno Semestre', 'Décimo Semestre'])
  semester: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  secondName: string;

  @IsString()
  @IsNotEmpty()
  fatherLastName: string;

  @IsString()
  @IsNotEmpty()
  motherLastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['Valparaíso', 'Santiago', 'San Felipe'])
  sede: string;

  @IsBoolean()
  @IsNotEmpty()
  consumoSustancias: boolean;

  @IsOptional() // Justification can be "none" or filled if necessary
  @IsString()
  justConsumoSustancias: string;

  @IsBoolean()
  @IsNotEmpty()
  convivencia: boolean;

  @IsOptional()
  @IsString()
  justConvivencia: string;

  @IsBoolean()
  @IsNotEmpty()
  emocionalYAcademico: boolean;

  @IsOptional()
  @IsString()
  justEmocionalYAcademico: string;

  @IsBoolean()
  @IsNotEmpty()
  emocional: boolean;

  @IsOptional()
  @IsString()
  justEmocional: string;

  @IsBoolean()
  @IsNotEmpty()
  academico: boolean;

  @IsOptional()
  @IsString()
  justAcademico: string;

  @IsBoolean()
  @IsNotEmpty()
  uvinclusiva: boolean;

  @IsOptional()
  @IsString()
  justUvinclusiva: string;

  @IsBoolean()
  @IsNotEmpty()
  abuso: boolean;

  @IsOptional()
  @IsString()
  justAbuso: string;

  @IsBoolean()
  @IsNotEmpty()
  economicos: boolean;

  @IsOptional()
  @IsString()
  justEconomicos: string;

  @IsBoolean()
  @IsNotEmpty()
  economicoEmocionalAcademico: boolean;

  @IsOptional()
  @IsString()
  justEconomicoEmocionalAcademico: string;

  @IsBoolean()
  @IsNotEmpty()
  economicoEmocional: boolean;

  @IsOptional()
  @IsString()
  justEconomicoEmocional: string;

  @IsBoolean()
  @IsNotEmpty()
  economicoAcademico: boolean;

  @IsOptional()
  @IsString()
  justEconomicoAcademico: string;

  @IsOptional()
  @IsString()
  remedialAction: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFollowUpDto)
  follow_ups: CreateFollowUpDto[];
}
export class UpdateStudentDto {
  @IsString()
  @IsNotEmpty()
  rut: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['Primer Semestre', 'Segundo Semestre', 'Tercer Semestre', 'Cuarto Semestre', 'Quinto Semestre', 'Sexto Semestre', 'Séptimo Semestre', 'Octavo Semestre', 'Noveno Semestre', 'Décimo Semestre'])
  semester: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  remedialAction: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['Valparaíso', 'Santiago', 'San Felipe'])
  sede: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFollowUpDto)
  follow_ups: CreateFollowUpDto[];
}
