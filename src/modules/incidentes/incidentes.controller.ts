import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { IncidentesService } from './incidentes.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { UpdateIncidenteDto } from './dto/update-incidente.dto';

@ApiTags('incidentes')
@Controller('incidentes')
export class IncidentesController {
  constructor(private readonly incidentesService: IncidentesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos os incidentes' })
  @ApiResponse({ status: 200, description: 'Lista de incidentes retornada com sucesso.' })
  findAll() {
    return this.incidentesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um incidente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do incidente', example: 1 })
  @ApiResponse({ status: 200, description: 'Incidente encontrado.' })
  @ApiResponse({ status: 404, description: 'Incidente não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.incidentesService.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Criar um novo incidente' })
  @ApiResponse({ status: 201, description: 'Incidente criado com sucesso.' })
  create(@Body() createIncidenteDto: CreateIncidenteDto) {
    return this.incidentesService.create(createIncidenteDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um incidente existente' })
  @ApiParam({ name: 'id', description: 'ID do incidente', example: 1 })
  @ApiResponse({ status: 200, description: 'Incidente atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Incidente não encontrado.' })
  update(@Param('id') id: string, @Body() updateIncidenteDto: UpdateIncidenteDto) {
    return this.incidentesService.update(Number(id), updateIncidenteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um incidente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do incidente', example: 1 })
  @ApiResponse({ status: 200, description: 'Incidente excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Incidente não encontrado.' })
  delete(@Param('id') id: string) {
    return this.incidentesService.delete(Number(id));
  }
}
