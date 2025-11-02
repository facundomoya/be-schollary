import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bcrypt } from 'src/common/encriptador/bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Rol } from 'src/rol/entities/rol.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
    private bcrypt: Bcrypt,
  ) { }

   async create(createUserDto: CreateUserDto) {
    try {
      // 1️⃣ Verificar si el usuario ya existe
      const userExists = await this.userRepository.findOne({
        where: { user_name: createUserDto.user_name },
      });
      if (userExists) {
        throw new HttpException('El usuario ya existe', HttpStatus.BAD_REQUEST);
      }

      // 2️⃣ Buscar el rol asociado
      const rol = await this.rolRepository.findOneBy({ id: createUserDto.rolId });
      if (!rol) {
        throw new NotFoundException('Rol no encontrado.');
      }

      // 3️⃣ Encriptar la contraseña
      const hashedPassword = await this.bcrypt.encriptar(createUserDto.password);

      // 4️⃣ Crear el nuevo usuario vinculando el rol
      const user = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
        rol,
      });

      // 5️⃣ Guardar el usuario
      await this.userRepository.save(user);

      // 6️⃣ Retornar con mensaje
      const { password, ...userWithoutPassword } = user;
      return {
        message: 'Usuario creado correctamente',
        ...userWithoutPassword,
      };
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Error interno del servidor',
        error.message,
      );
    }
  }

  async findAll(params: Partial<CreateUserDto>) {
    const users = await this.userRepository.find({ where: { ...params } });
    return users.map(({ password, ...rest }) => rest);
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    const { password, ...rest } = user;
    return rest;
  }


  async login(user_name: string, password: string) {
    const user = await this.userRepository.findOne({ where: { user_name } });
    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const passwordValid = await this.bcrypt.comparar(password, user.password);
    if (!passwordValid) {
      throw new HttpException('Credenciales inválidas', HttpStatus.UNAUTHORIZED);
    }
    
    return { message: 'Login exitoso' };
  
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
