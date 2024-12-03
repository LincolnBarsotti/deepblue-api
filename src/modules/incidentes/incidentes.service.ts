import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class IncidentesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.incidente.findMany();
  }

  async findOne(id: number) {
    const incidente = await this.prisma.incidente.findUnique({ where: { id } });
    if (!incidente) {
      throw new NotFoundException(`Incidente com ID ${id} não encontrado.`);
    }
    return incidente;
  }

  async create(createIncidenteDto: CreateIncidenteDto) {
    const {
      Data_de_criacao,
      Data_da_primeira_observacao,
      Data_estimada_do_incidente,
      ...rest
    } = createIncidenteDto;
  
    return this.prisma.incidente.create({
      data: {
        ...rest,
        Data_de_criacao: new Date(Data_de_criacao), // Converte para Date
        Data_da_primeira_observacao: new Date(Data_da_primeira_observacao), // Converte para Date
        Data_estimada_do_incidente: new Date(Data_estimada_do_incidente), // Converte para Date
      },
    });
  }
  

  async update(id: number, updateIncidenteDto: UpdateIncidenteDto) {
    const {
      Data_de_criacao,
      Data_da_primeira_observacao,
      Data_estimada_do_incidente,
      ...rest
    } = updateIncidenteDto;
  
    // Verifica se o incidente existe antes de atualizar
    const incidente = await this.prisma.incidente.findUnique({ where: { id } });
    if (!incidente) {
      throw new NotFoundException(`Incidente com ID ${id} não encontrado.`);
    }
  
    return this.prisma.incidente.update({
      where: { id },
      data: {
        ...rest,
        ...(Data_de_criacao && { Data_de_criacao: new Date(Data_de_criacao) }),
        ...(Data_da_primeira_observacao && { Data_da_primeira_observacao: new Date(Data_da_primeira_observacao) }),
        ...(Data_estimada_do_incidente && { Data_estimada_do_incidente: new Date(Data_estimada_do_incidente) }),
      },
    });
  }
  

  async delete(id: number) {
    const incidente = await this.prisma.incidente.findUnique({ where: { id } });
    if (!incidente) {
      throw new NotFoundException(`Incidente com ID ${id} não encontrado.`);
    }

    await this.prisma.incidente.delete({ where: { id } });
  }
}
