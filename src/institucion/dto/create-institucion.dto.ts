import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateInstitucionDto {
    @ApiProperty({ example: 'Escuela Primaria N°1' })
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    nombre: string;
}
