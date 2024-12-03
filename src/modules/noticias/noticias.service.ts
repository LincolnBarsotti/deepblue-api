import { Injectable } from '@nestjs/common';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class NoticiasService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateNoticiaDto) {
    return this.prisma.noticia.create({
      data: {
        ...data,
        data: new Date(data.data), // Converte data para o formato Date válido
      },
    });
  }

  async findAll() {
    return this.prisma.noticia.findMany();
  }

  async findOne(id: number) {
    return this.prisma.noticia.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateNoticiaDto) {
    return this.prisma.noticia.update({
      where: { id },
      data: {
        ...data,
        data: data.data ? new Date(data.data) : undefined, // Converte data se fornecida
      },
    });
  }

  async remove(id: number) {
    return this.prisma.noticia.delete({
      where: { id },
    });
  }
}
