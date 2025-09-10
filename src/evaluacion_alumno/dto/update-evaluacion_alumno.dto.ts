import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluacionAlumnoDto } from './create-evaluacion_alumno.dto';

export class UpdateEvaluacionAlumnoDto extends PartialType(CreateEvaluacionAlumnoDto) {}
