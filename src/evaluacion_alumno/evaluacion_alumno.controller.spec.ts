import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionAlumnoController } from './evaluacion_alumno.controller';
import { EvaluacionAlumnoService } from './evaluacion_alumno.service';

describe('EvaluacionAlumnoController', () => {
  let controller: EvaluacionAlumnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluacionAlumnoController],
      providers: [EvaluacionAlumnoService],
    }).compile();

    controller = module.get<EvaluacionAlumnoController>(EvaluacionAlumnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
