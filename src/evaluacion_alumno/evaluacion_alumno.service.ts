import { Injectable } from '@nestjs/common';
import { CreateEvaluacionAlumnoDto } from './dto/create-evaluacion_alumno.dto';
import { UpdateEvaluacionAlumnoDto } from './dto/update-evaluacion_alumno.dto';

@Injectable()
export class EvaluacionAlumnoService {
  create(createEvaluacionAlumnoDto: CreateEvaluacionAlumnoDto) {
    return 'This action adds a new evaluacionAlumno';
  }

  findAll() {
    return `This action returns all evaluacionAlumno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluacionAlumno`;
  }

  update(id: number, updateEvaluacionAlumnoDto: UpdateEvaluacionAlumnoDto) {
    return `This action updates a #${id} evaluacionAlumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluacionAlumno`;
  }
}
