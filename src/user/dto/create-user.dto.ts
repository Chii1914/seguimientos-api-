import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    email: string;
    @IsString()
    sede: string;
    @IsString() 
    nombre: string;
    @IsString()
    apellido_paterno: string;
    @IsString()
    apellido_materno: string;
}
