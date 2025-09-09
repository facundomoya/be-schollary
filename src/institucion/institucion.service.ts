import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institucion } from './entities/institucion.entity';
import { User } from '../user/entities/user.entity';
import { CreateInstitucionDto } from './dto/create-institucion.dto';
import { UpdateInstitucionDto } from './dto/update-institucion.dto';

@Injectable()
export class InstitucionService {
   constructor(
    @InjectRepository(Institucion)
    private institucionRepo: Repository<Institucion>,
  ) {}

 async create(createDto: CreateInstitucionDto) {
    const institucion = this.institucionRepo.create({ 
      nombre: createDto.nombre,
      user: {
        user_name: createDto.user.user_name,
        password: createDto.user.password,
      }
    });

    await this.institucionRepo.save(institucion);
    return { institucion };
  }

  findAll() {
    return `This action returns all institucion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institucion`;
  }

  update(id: number, updateInstitucionDto: UpdateInstitucionDto) {
    return `This action updates a #${id} institucion`;
  }

  remove(id: number) {
    return `This action removes a #${id} institucion`;
  }
}
