import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateInstitucionDto {
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    nombre: string;
}
