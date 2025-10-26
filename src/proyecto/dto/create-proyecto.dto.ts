import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateProyectoDto {
    @ApiProperty({ example: 'Proyecto de ejemplo' })
    @IsString({message: 'El nombre del proyecto debe ser una cadena de texto'})
    @IsNotEmpty({message: 'El nombre del proyecto es obligatorio'})
    nombre_proyecto: string;

    @ApiProperty({ example: 'Descripción del proyecto de ejemplo' })
    @IsString({message: 'La descripción del proyecto debe ser una cadena de texto'})
    @IsNotEmpty({message: 'La descripción del proyecto es obligatoria'})
    descripcion: string;

    @ApiProperty({ example: 'activo' })
    @IsString({message: 'El estado del proyecto debe ser una cadena de texto'})
    @IsNotEmpty({message: 'El estado del proyecto es obligatorio'})
    estado: string;

    @ApiProperty({ example: '2024-01-01' })
    @IsString({message: 'La fecha de inicio debe ser una cadena de texto'})
    @IsNotEmpty({message: 'La fecha de inicio es obligatoria'})
    fecha_inicio: string;

    @ApiProperty({ example: '2024-12-31' })
    @IsString({message: 'La fecha de fin debe ser una cadena de texto'})
    @IsNotEmpty({message: 'La fecha de fin es obligatoria'})
    fecha_fin: string;

    @ApiProperty({ example: '1' })
    @IsNotEmpty({message: 'El ID del cliente es obligatorio'})
    clienteId: string;
}
