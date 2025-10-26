import { ConflictException, Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) { }

  async create(createProyectoDto: CreateProyectoDto, ): Promise<{ proyecto: Proyecto; message: string }> {
      const proyectoExistente = await this.proyectoRepository.findOneBy({ nombre_proyecto: createProyectoDto.nombre_proyecto });
      if (proyectoExistente) {
        throw new ConflictException('Ya existe un proyecto con ese nombre.');
      }
      const { clienteId, ...rest } = createProyectoDto;
      const nuevoProyecto = this.proyectoRepository.create({
        ...rest,
        cliente: { id: Number(clienteId) } as Cliente
      });
      const proyectoGuardado = await this.proyectoRepository.save(nuevoProyecto);
      return {
        proyecto: proyectoGuardado,
        message: 'Proyecto creado correctamente.'
      };
  };

  findAll() {
    return `This action returns all proyecto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyecto`;
  }

  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}
