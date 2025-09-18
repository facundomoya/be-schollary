import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateEvaluacionAlumnoDto {

  @IsNotEmpty()
  @IsArray()
  nota: number[];

  @IsNotEmpty()
  @IsArray()
  alumnosIds: number[];
}
