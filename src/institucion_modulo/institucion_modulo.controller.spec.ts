import { Test, TestingModule } from '@nestjs/testing';
import { InstitucionModuloController } from './institucion_modulo.controller';
import { InstitucionModuloService } from './institucion_modulo.service';

describe('InstitucionModuloController', () => {
  let controller: InstitucionModuloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstitucionModuloController],
      providers: [InstitucionModuloService],
    }).compile();

    controller = module.get<InstitucionModuloController>(InstitucionModuloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
