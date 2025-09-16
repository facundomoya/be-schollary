import { Injectable } from '@nestjs/common';
import { UpdateAlumnoDto } from '../alumno/dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluacionAlumno } from './entities/evaluacion_alumno.entity';

@Injectable()
export class EvaluacionAlumnoService {
  constructor(
    @InjectRepository(EvaluacionAlumno)
    private evaluacionAlumnoRepository: Repository<EvaluacionAlumno>,
  ) { }

create() {}


findAll() {
  return `This action returns all evaluacion_alumno`;
}

findOne(id: number) {
  return `This action returns a #${id} evaluacion_alumno`;
}

update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
  return `This action updates a #${id} evaluacion_alumno`;
}

remove(id: number) {
  return `This action removes a #${id} evaluacion_alumno`;
}
}
