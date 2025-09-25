import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEvaluacionDto {
  @IsNotEmpty()
  @IsNumber()
  materiaId: number;

  @IsNotEmpty()
  @IsNumber()
  nota: number;

  @IsNotEmpty()
  @IsArray()
  alumnosIds: number[];
}
