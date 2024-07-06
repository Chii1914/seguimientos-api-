import { IsEnum, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    email: string;
    @IsEnum(['Valparaíso', 'Santiago', 'San Felipe', 'all'])
    sede: string;
    @IsString() 
    nombre: string;
    @IsString()
    apellido_paterno: string;
    @IsString()
    apellido_materno: string;
}
