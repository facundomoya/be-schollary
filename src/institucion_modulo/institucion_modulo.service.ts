import { Injectable } from '@nestjs/common';
import { CreateInstitucionModuloDto } from './dto/create-institucion_modulo.dto';
import { UpdateInstitucionModuloDto } from './dto/update-institucion_modulo.dto';

@Injectable()
export class InstitucionModuloService {
  create(createInstitucionModuloDto: CreateInstitucionModuloDto) {
    return 'This action adds a new institucionModulo';
  }

  findAll() {
    return `This action returns all institucionModulo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} institucionModulo`;
  }

  update(id: number, updateInstitucionModuloDto: UpdateInstitucionModuloDto) {
    return `This action updates a #${id} institucionModulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} institucionModulo`;
  }
}
