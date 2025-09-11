import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institucion } from './entities/institucion.entity';
import { InstitucionService } from './institucion.service';
import { InstitucionController } from './institucion.controller';
import { InstitucionModulo } from './entities/institucion_modulo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institucion, InstitucionModulo])], // <-- Esto es clave
  providers: [InstitucionService],
  controllers: [InstitucionController],
  exports: [InstitucionService],
})
export class InstitucionModule {}