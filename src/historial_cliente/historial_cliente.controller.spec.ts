import { Test, TestingModule } from '@nestjs/testing';
import { HistorialClienteController } from './historial_cliente.controller';
import { HistorialClienteService } from '../cliente/historial_cliente.service';

describe('HistorialClienteController', () => {
  let controller: HistorialClienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialClienteController],
      providers: [HistorialClienteService],
    }).compile();

    controller = module.get<HistorialClienteController>(HistorialClienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
