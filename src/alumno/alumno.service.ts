import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { Institucion } from 'src/institucion/entities/institucion.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,
  ) {}

  async create(createAlumnoDto: CreateAlumnoDto) {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    const institucionId = createAlumnoDto.institucionId;
    if (institucionId) {
      alumno.institucion = { id: institucionId } as Institucion;
    }
    await this.alumnoRepository.save(alumno);
    return alumno;
  }

  findAll() {
    return `This action returns all alumno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
