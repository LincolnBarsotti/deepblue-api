import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateAcidenteDto } from './dto/create-acidente.dto';
import { UpdateAcidenteDto } from './dto/update-acidente.dto';

@Injectable()
export class AcidenteService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAcidenteDto) {
    return this.prisma.acidente.create({
      data: {
        ...data,
        data: new Date(data.data), // Converte para um objeto Date
        resolucao: data.resolucao
          ? {
              create: {
                ...data.resolucao,
                data: new Date(data.resolucao.data), // Também converte a data da resolução
              },
            }
          : undefined,
      },
    });
  }  

  async findAll() {
    return this.prisma.acidente.findMany({
      include: { resolucao: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.acidente.findUnique({
      where: { id },
      include: { resolucao: true },
    });
  }

  async update(id: number, data: UpdateAcidenteDto) {
    return this.prisma.acidente.update({
      where: { id },
      data: {
        ...data,
        data: data.data ? new Date(data.data) : undefined, // Converte para Date, se fornecido
        resolucao: data.resolucao
          ? {
              upsert: {
                create: {
                  ...data.resolucao,
                  data: new Date(data.resolucao.data), // Converte a data da resolução ao criar
                },
                update: {
                  ...data.resolucao,
                  data: new Date(data.resolucao.data), // Converte a data da resolução ao atualizar
                },
              },
            }
          : undefined,
      },
    });
  }
  

  async remove(id: number) {
    return this.prisma.acidente.delete({
      where: { id },
    });
  }
}
