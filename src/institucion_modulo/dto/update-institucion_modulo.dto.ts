import { PartialType } from '@nestjs/mapped-types';
import { CreateInstitucionModuloDto } from './create-institucion_modulo.dto';

export class UpdateInstitucionModuloDto extends PartialType(CreateInstitucionModuloDto) {}
