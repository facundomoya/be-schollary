import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateAlertaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  tipo_alerta: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  @Transform(({ value }) => (value ? new Date(value) : value), { toClassOnly: true })
  fecha_alerta: Date;

  @ApiProperty()
  @IsString()
  descripcion: string;

  @ApiProperty()
  @IsNotEmpty()
  clienteId: number;
}
