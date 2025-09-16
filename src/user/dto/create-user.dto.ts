import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    user_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    password: string;

    @IsInt()
    @IsNotEmpty()
    institucionId: number;
}
