import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService,   
  @InjectRepository(User)
  private userRepository: Repository<User>) {
  }

  async login(createAuthDto: CreateAuthDto) {
    const userValido = await this.userRepository.findOne({ where: { user_name: createAuthDto.user_name, password: createAuthDto.password } });

    if(!userValido){
      return { message: 'Usuario no encontrado' };
    }

    if(userValido.password === userValido.password){
      return this.jwtService.sign({
        token:{
        id: userValido.id,
        user_name: userValido.user_name,
        }
      });
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
