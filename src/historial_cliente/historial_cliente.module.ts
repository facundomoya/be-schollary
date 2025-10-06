import { Module } from '@nestjs/common';
import { HistorialClienteService } from './historial_cliente.service';
import { HistorialClienteController } from './historial_cliente.controller';

@Module({
  controllers: [HistorialClienteController],
  providers: [HistorialClienteService],
})
export class HistorialClienteModule {}
