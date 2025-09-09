import { Test, TestingModule } from '@nestjs/testing';
import { InstitucionModuloService } from './institucion_modulo.service';

describe('InstitucionModuloService', () => {
  let service: InstitucionModuloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitucionModuloService],
    }).compile();

    service = module.get<InstitucionModuloService>(InstitucionModuloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
