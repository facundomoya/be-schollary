import { IsString, IsInt, MinLength, IsNotEmpty } from 'class-validator';
export class CreateAlumnoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsInt()
  @MinLength(2)
  @IsNotEmpty()
  edad: number;

  @IsInt()
  @IsNotEmpty()
  institucionId: number;

}
