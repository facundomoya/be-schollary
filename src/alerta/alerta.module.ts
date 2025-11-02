import { Module } from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { AlertaController } from './alerta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alerta } from './entities/alerta.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alerta, Cliente])],
  controllers: [AlertaController],
  providers: [AlertaService],
})
export class AlertaModule {}
