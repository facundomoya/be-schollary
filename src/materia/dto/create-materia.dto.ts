import { IsNotEmpty, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMateriaDto {
  @ApiProperty({ example: 'Matematica' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 1, description: 'ID del usuario' })
  @IsInt()
  @IsNotEmpty()
  userId: number;
}
