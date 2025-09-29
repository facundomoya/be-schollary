import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEvaluacionDto {
  @IsNotEmpty()
  @IsNumber()
  materiaId: number;

  @IsNotEmpty()
  @IsArray()
  nota: number;

  @IsNotEmpty()
  @IsArray()
  alumnosIds: number[];
}
