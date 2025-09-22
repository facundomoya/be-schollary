import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Institucion } from './entities/institucion.entity';
import { CreateInstitucionDto } from './dto/create-institucion.dto';
import { UpdateInstitucionDto } from './dto/update-institucion.dto';

@Injectable()
export class InstitucionService {
   constructor(
    @InjectRepository(Institucion)
    private institucionRepository: Repository<Institucion>,
  ) {}

  async create(createInstitucionDto: CreateInstitucionDto) {
    const institucion = this.institucionRepository.create(createInstitucionDto);
    await this.institucionRepository.save(institucion);
    return institucion;
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
