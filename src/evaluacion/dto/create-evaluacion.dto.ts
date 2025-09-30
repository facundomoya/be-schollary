import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEvaluacionDto {
  @ApiProperty({ example: 1, description: 'ID de la materia' })
  @IsNotEmpty()
  @IsNumber()
  materiaId: number;

  @ApiProperty({ example: [8, 9, 10], description: 'Notas de los alumnos' })
  @IsNotEmpty()
  @IsArray()
  nota: number;

  @ApiProperty({ example: [1, 2, 3], description: 'IDs de los alumnos' })
  @IsNotEmpty()
  @IsArray()
  alumnosIds: number[];
}
