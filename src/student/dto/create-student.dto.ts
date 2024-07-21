import { IsString, IsEnum, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFollowUpDto } from '../../follow-up/dto/create-follow-up.dto';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  rut: string;

  @IsString()
  @IsNotEmpty() 
  thumbnail?: string;

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
  academicCharacter: string;

  @IsString()
  @IsNotEmpty()
  healthReason: string;

  @IsString()
  @IsNotEmpty()
  socialReason: string;

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
  academicCharacter: string;

  @IsString()
  @IsNotEmpty()
  healthReason: string;

  @IsString()
  @IsNotEmpty()
  socialReason: string;

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
