import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
        @ApiProperty({ example: 'usuario123' })
        @IsString()
        @IsNotEmpty()
        nombre: string;
    
        @ApiProperty({ example: 'ejemplo@gmail.com' })
        @IsString()
        @IsNotEmpty()
        @MinLength(4)
        email: string;
    
        @ApiProperty({ example: 3811234567 })
        @IsInt()
        @IsNotEmpty()
        telefono: string;

        @ApiProperty({ example: 'Calle Falsa 123' })
        @IsString()
        @IsNotEmpty()
        direccion: string;

        @ApiProperty({ example: '20-12345678-9' })
        @IsString()
        @IsNotEmpty()
        cuit: string;

        @ApiProperty({ example: 'activo' })
        @IsString()
        @IsNotEmpty()
        estado: string;

        @ApiProperty({ example: 1, description: 'ID del contrato' })
        @IsInt()
        @IsNotEmpty()
        contratosId: number;
}
