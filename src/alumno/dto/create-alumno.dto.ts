import { IsString, IsInt, MinLength } from 'class-validator';
export class CreateAlumnoDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsInt()
  @MinLength(2)
  edad: number;

  @IsInt()
  institucionId: number;

}
