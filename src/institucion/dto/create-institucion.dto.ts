import { IsString, MinLength } from 'class-validator';
export class CreateInstitucionDto {
    @IsString()
    @MinLength(3)
    nombre: string;
}
