import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty } from "class-validator";
import { Transform } from "class-transformer";

export class CreateContratoDto {
    @ApiProperty()
    @IsDate({message: 'La fecha de inicio debe ser una fecha válida'})
    @IsNotEmpty({message: 'La fecha de inicio es obligatoria'})
    @Transform(({ value }) => (value ? new Date(value) : value), { toClassOnly: true })
    fechaInicio: Date;

    @ApiProperty()
    @IsDate({message: 'La fecha de fin debe ser una fecha válida'})
    @IsNotEmpty({message: 'La fecha de fin es obligatoria'})
    @Transform(({ value }) => (value ? new Date(value) : value), { toClassOnly: true })
    fechaFin: Date;

    @ApiProperty()
    @IsNotEmpty({message: 'El monto es obligatorio'})
    monto: number;

    @ApiProperty()
    @IsNotEmpty({message: 'El estado es obligatorio'})
    estado: string;

    @ApiProperty()
    @IsNotEmpty({message: 'El ID del cliente es obligatorio'})
    clienteId: number;
}
