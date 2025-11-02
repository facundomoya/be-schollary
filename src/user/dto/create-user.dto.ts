import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty({ example: 'usuario123' })
    @IsString()
    @IsNotEmpty()
    user_name: string;

    @ApiProperty({ example: 'passwordSeguro123' })
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @ApiProperty({ example: 1, description: 'ID del rol' })
    @IsInt()
    @IsNotEmpty()
    rolId: number;
}
