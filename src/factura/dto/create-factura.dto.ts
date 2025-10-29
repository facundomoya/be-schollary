import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateFacturaDto {
  @ApiProperty({ example: '2025-10-28' })
  @IsString()
  @IsNotEmpty()
  fecha_emision: string;

  @ApiProperty({ example: 12000.50 })
  @IsNumber()
  @IsNotEmpty()
  monto: number;

  @ApiProperty({ example: 'pendiente' })
  @IsString()
  @IsNotEmpty()
  estado_pago: string;

  @ApiProperty({ example: 'Factura de servicios de octubre' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  clienteId: number;

  @ApiProperty({ example: 3 })
  @IsNotEmpty()
  proyectoId: number;
}

