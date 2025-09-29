import { Injectable } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';
import { UpdateEvaluacionDto } from './dto/update-evaluacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from './entities/evaluacion.entity';
import { AlumnoService } from 'src/alumno/alumno.service';
import { Materia } from 'src/materia/entities/materia.entity';
import { EvaluacionAlumnoService } from './evaluacion_alumno.service';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private readonly evaluacionRepository: Repository<Evaluacion>,
    private readonly alumnoService: AlumnoService,
    private readonly evaluacionAlumnoService: EvaluacionAlumnoService,
  ) {}

async create(createEvaluacionDto: CreateEvaluacionDto) {
  const evaluacionData: Partial<Evaluacion> = {
    materia: { id: createEvaluacionDto.materiaId } as Materia,
  };
  // Buscar los alumnos que coinciden
  const alumnos = await this.alumnoService.findAll({});
  const alumnosFiltrados = alumnos.filter(alumno =>
    createEvaluacionDto.alumnosIds?.includes(alumno.id),
  );
  // Crear la evaluación
  const nuevaEvaluacion = this.evaluacionRepository.create({
    ...evaluacionData,
  });
  await this.evaluacionRepository.save(nuevaEvaluacion);
  // Ahora recorrer alumnos + notas
  for (let i = 0; i < alumnosFiltrados.length; i++) {
    const alumnos = alumnosFiltrados[i];
    const nota = createEvaluacionDto.nota[i]; // la nota correspondiente
    await this.evaluacionAlumnoService.create(nota, [alumnos], nuevaEvaluacion);
  }
  return nuevaEvaluacion;
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
