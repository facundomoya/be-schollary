import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bcrypt } from 'src/common/encriptador/bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private bcrypt: Bcrypt,
  ) { }

  async create(createUserDto: CreateUserDto) {

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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
