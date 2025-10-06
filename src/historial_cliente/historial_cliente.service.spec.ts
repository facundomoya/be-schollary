import { Test, TestingModule } from '@nestjs/testing';
import { HistorialClienteService } from './historial_cliente.service';

describe('HistorialClienteService', () => {
  let service: HistorialClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialClienteService],
    }).compile();

    service = module.get<HistorialClienteService>(HistorialClienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
