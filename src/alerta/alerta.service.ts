import { Injectable } from '@nestjs/common';
import { CreateAlertaDto } from './dto/create-alerta.dto';
import { UpdateAlertaDto } from './dto/update-alerta.dto';
import { Alerta } from './entities/alerta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Injectable()
export class AlertaService {
  constructor(
    @InjectRepository(Alerta) private alertaRepository: Repository<Alerta>,
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>,
  ) {}

 async create(createAlertaDto: CreateAlertaDto): Promise<Alerta & { message: string }> {
  try {
    // 1️⃣ Buscar el cliente asociado a la alerta
    const cliente = await this.clienteRepository.findOneBy({ id: createAlertaDto.clienteId });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado.');
    }

    // 2️⃣ Crear la alerta vinculando el cliente
    const alerta = this.alertaRepository.create({
      ...createAlertaDto,
      cliente,
    });

    // 3️⃣ Guardar la alerta
    await this.alertaRepository.save(alerta);

    // 4️⃣ Retornar con mensaje de éxito
    return {
      message: 'Alerta creada correctamente',
      ...alerta,
    };
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new InternalServerErrorException('Error interno del servidor', error.message);
  }
}


  findAll() {
    return `This action returns all alerta`;
  }

  async findOne(id: number) {
    const alerta = await this.alertaRepository.findOneBy({ id });
    if (!alerta) {
      throw new NotFoundException('Alerta no encontrada.');
    }
    return alerta;
  }

  update(id: number, updateAlertaDto: UpdateAlertaDto) {
    return `This action updates a #${id} alerta`;
  }

  remove(id: number) {
    return `This action removes a #${id} alerta`;
  }
}
