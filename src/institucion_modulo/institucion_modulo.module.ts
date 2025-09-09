import { Module } from '@nestjs/common';
import { InstitucionModuloService } from './institucion_modulo.service';
import { InstitucionModuloController } from './institucion_modulo.controller';

@Module({
  controllers: [InstitucionModuloController],
  providers: [InstitucionModuloService],
})
export class InstitucionModuloModule {}
