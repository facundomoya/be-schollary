import { IsString, IsInt, MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateAlumnoDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'Perez' })
  @IsString()
  @IsNotEmpty()
  apellido: string;

  @ApiProperty({ example: 18 })
  @IsInt()
  @MinLength(2)
  @IsNotEmpty()
  edad: number;

  @ApiProperty({ example: 1, description: 'ID de la institucion' })
  @IsInt()
  @IsNotEmpty()
  institucionId: number;

}
