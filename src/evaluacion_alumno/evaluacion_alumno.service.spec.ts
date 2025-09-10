import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionAlumnoService } from './evaluacion_alumno.service';

describe('EvaluacionAlumnoService', () => {
  let service: EvaluacionAlumnoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluacionAlumnoService],
    }).compile();

    service = module.get<EvaluacionAlumnoService>(EvaluacionAlumnoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
