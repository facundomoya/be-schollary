import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateFacturaDto {
  @ApiProperty({ example: '2025-10-28' })
  @IsNotEmpty({message: 'La fecha de emisión es obligatoria'})
  @IsDate({message: 'La fecha de emisión debe ser una fecha válida'})
  @Transform(({ value }) => (value ? new Date(value) : value), { toClassOnly: true })
  fecha_emision: Date;

  @ApiProperty({ example: 12000.50 })
  @IsNumber()
  @IsNotEmpty({message: 'El monto es obligatorio'})
  monto: number;

  @ApiProperty({ example: 'pendiente' })
  @IsString({message: 'El estado de pago debe ser una cadena de texto'})
  @IsNotEmpty({message: 'El estado de pago es obligatorio'})
  estado_pago: string;

  @ApiProperty({ example: 'Factura de servicios de octubre' })
  @IsString({message: 'La descripción debe ser una cadena de texto'})
  descripcion: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty({message: 'El ID del cliente no puede estar vacío'})
  clienteId: number;

  @ApiProperty({ example: 3 })
  @IsNotEmpty({message: 'El ID del proyecto no puede estar vacío'})
  proyectoId: number;
}

