import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
        @ApiProperty({ example: 'usuario123' })
        @IsString()
        @IsNotEmpty({message: 'El nombre es obligatorio'})
        nombre: string;
    
        @ApiProperty({ example: 'ejemplo@gmail.com' })
        @IsString()
        @IsNotEmpty({message: 'El email es obligatorio'})
        @MinLength(4)
        @IsEmail()
        email: string;
    
        @ApiProperty({ example: 3811234567 })
        @IsString()
        @IsNotEmpty({message: 'El número de teléfono es obligatorio'})
        telefono: string;

        @ApiProperty({ example: 'Calle Falsa 123' })
        @IsString()
        @IsNotEmpty({message: 'La dirección es obligatoria'})
        direccion: string;

        @ApiProperty({ example: '20-12345678-9' })
        @IsString()
        @IsNotEmpty({message: 'El CUIT es obligatorio'})
        cuit: string;

        @ApiProperty({ example: 'activo' })
        @IsString()
        @IsNotEmpty({message: 'El estado es obligatorio'})
        estado: string;
}
