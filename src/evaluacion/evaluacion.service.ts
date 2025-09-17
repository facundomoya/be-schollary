import { Injectable } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from './entities/evaluacion.entity';
import { Materia } from 'src/materia/entities/materia.entity';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private evaluacionRepository: Repository<Evaluacion>,
  ) {}

  async create(createEvaluacionDto: CreateEvaluacionDto) {
  const { materiaId } = createEvaluacionDto;

  const evaluacion = this.evaluacionRepository.create({
    materia: { id: materiaId } as Materia,
  });

  return await this.evaluacionRepository.save(evaluacion);
  }

  findAll() {
    return `This action returns all evaluacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluacion`;
  }

  update(id: number, updateEvaluacionDto: UpdateEvaluacionDto) {
    return `This action updates a #${id} evaluacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluacion`;
  }
}
