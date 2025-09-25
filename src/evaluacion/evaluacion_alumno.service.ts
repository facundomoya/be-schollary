import { Injectable } from '@nestjs/common';
import { UpdateAlumnoDto } from '../alumno/dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluacionAlumno } from './entities/evaluacion_alumno.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { Evaluacion } from './entities/evaluacion.entity';
@Injectable()
export class EvaluacionAlumnoService {
  constructor(
    @InjectRepository(EvaluacionAlumno)
    private evaluacionAlumnoRepository: Repository<EvaluacionAlumno>,
  ) { }

async create( nota: number, alumnos: Alumno[], evaluacion: Evaluacion) {
  const evaluacionAlumnos = alumnos.map(alumno => {
    const evaluacionAlumno = this.evaluacionAlumnoRepository.create({
      evaluacion,
      alumno,
      nota
    });
    return evaluacionAlumno;
  });
  await this.evaluacionAlumnoRepository.save(evaluacionAlumnos);
}

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
