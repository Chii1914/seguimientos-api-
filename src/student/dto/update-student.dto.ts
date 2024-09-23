import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsString, IsEnum, IsNotEmpty, IsArray, ValidateNested, IsOptional, IsEmail, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFollowUpDto } from '../../follow-up/dto/create-follow-up.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    @IsOptional()
    @IsString()
    rut: string;
  
    @IsOptional()
    @IsString()
    df: string;
  
    @IsOptional()
    @IsString()
    @IsEnum(['Primer Semestre', 'Segundo Semestre', 'Tercer Semestre', 'Cuarto Semestre', 'Quinto Semestre', 'Sexto Semestre', 'Séptimo Semestre', 'Octavo Semestre', 'Noveno Semestre', 'Décimo Semestre'])
    semester: string;
  
    @IsOptional()
    @IsEmail()
    email: string;
  
    @IsOptional()
    @IsString()
    phone: string;
  
    @IsOptional()
    @IsBoolean()
    state: boolean;
  
    @IsOptional()
    @IsString()
    location: string;
  
    @IsOptional()
    @IsString()
    name: string;
  
    @IsOptional()
    @IsString()
    secondName: string;
  
    @IsOptional()
    @IsString()
    fatherLastName: string;
  
    @IsOptional()
    @IsString()
    motherLastName: string;
  
    @IsOptional()
    @IsString()
    @IsEnum(['Valparaíso', 'Santiago', 'San Felipe'])
    sede: string;
  
    // Adding all the boolean fields with their justifications
    @IsOptional()
    @IsBoolean()
    consumoSustancias: boolean;
    @IsOptional()
    @IsString()
    justConsumoSustancias: string;
  
    @IsOptional()
    @IsBoolean()
    convivencia: boolean;
    @IsOptional()
    @IsString()
    justConvivencia: string;
  
    @IsOptional()
    @IsBoolean()
    emocionalYAcademico: boolean;
    @IsOptional()
    @IsString()
    justEmocionalYAcademico: string;
  
    @IsOptional()
    @IsBoolean()
    emocional: boolean;
    @IsOptional()
    @IsString()
    justEmocional: string;
  
    @IsOptional()
    @IsBoolean()
    academico: boolean;
    @IsOptional()
    @IsString()
    justAcademico: string;
  
    @IsOptional()
    @IsBoolean()
    uvinclusiva: boolean;
    @IsOptional()
    @IsString()
    justUvinclusiva: string;
  
    @IsOptional()
    @IsBoolean()
    abuso: boolean;
    @IsOptional()
    @IsString()
    justAbuso: string;
  
    @IsOptional()
    @IsBoolean()
    economicos: boolean;
    @IsOptional()
    @IsString()
    justEconomicos: string;
  
    @IsOptional()
    @IsBoolean()
    economicoEmocionalAcademico: boolean;
    @IsOptional()
    @IsString()
    justEconomicoEmocionalAcademico: string;
  
    @IsOptional()
    @IsBoolean()
    economicoEmocional: boolean;
    @IsOptional()
    @IsString()
    justEconomicoEmocional: string;
  
    @IsOptional()
    @IsBoolean()
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
