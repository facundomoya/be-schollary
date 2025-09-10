import { Module } from '@nestjs/common';
import { EvaluacionAlumnoService } from './evaluacion_alumno.service';
import { EvaluacionAlumnoController } from './evaluacion_alumno.controller';

@Module({
  controllers: [EvaluacionAlumnoController],
  providers: [EvaluacionAlumnoService],
})
export class EvaluacionAlumnoModule {}
