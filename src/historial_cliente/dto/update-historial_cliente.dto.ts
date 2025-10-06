import { PartialType } from '@nestjs/swagger';
import { CreateHistorialClienteDto } from './create-historial_cliente.dto';

export class UpdateHistorialClienteDto extends PartialType(CreateHistorialClienteDto) {}
