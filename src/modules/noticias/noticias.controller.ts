import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Noticias') // Agrupa no Swagger
@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova notícia' })
  @ApiResponse({ status: 201, description: 'Notícia criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async create(@Body() createNoticiaDto: CreateNoticiaDto) {
    return this.noticiasService.create(createNoticiaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as notícias' })
  @ApiResponse({ status: 200, description: 'Lista de notícias retornada com sucesso.' })
  async findAll() {
    return this.noticiasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma notícia por ID' })
  @ApiResponse({ status: 200, description: 'Notícia retornada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Notícia não encontrada.' })
  async findOne(@Param('id') id: string) {
    return this.noticiasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma notícia existente' })
  @ApiResponse({ status: 200, description: 'Notícia atualizada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 404, description: 'Notícia não encontrada.' })
  async update(@Param('id') id: string, @Body() updateNoticiaDto: UpdateNoticiaDto) {
    return this.noticiasService.update(+id, updateNoticiaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma notícia por ID' })
  @ApiResponse({ status: 200, description: 'Notícia removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Notícia não encontrada.' })
  async remove(@Param('id') id: string) {
    return this.noticiasService.remove(+id);
  }
}
