import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { AcidenteService } from './acidentes.service';
import { CreateAcidenteDto } from './dto/create-acidente.dto';
import { UpdateAcidenteDto } from './dto/update-acidente.dto';

@ApiTags('Acidentes') // Nome do grupo no Swagger
@Controller('acidente')
export class AcidenteController {
  constructor(private readonly acidenteService: AcidenteService) {}

  @ApiOperation({ summary: 'Criar um novo acidente' })
  @ApiResponse({ status: 201, description: 'Acidente criado com sucesso.' })
  @Post()
  create(@Body() createAcidenteDto: CreateAcidenteDto) {
    return this.acidenteService.create(createAcidenteDto);
  }

  @ApiOperation({ summary: 'Listar todos os acidentes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de acidentes retornada com sucesso.',
  })
  @Get()
  findAll() {
    return this.acidenteService.findAll();
  }

  @ApiOperation({ summary: 'Buscar um acidente pelo ID' })
  @ApiResponse({ status: 200, description: 'Acidente retornado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Acidente não encontrado.' })
  @ApiParam({ name: 'id', type: Number, description: 'ID do acidente' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acidenteService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualizar um acidente existente' })
  @ApiResponse({ status: 200, description: 'Acidente atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Acidente não encontrado.' })
  @ApiParam({ name: 'id', type: Number, description: 'ID do acidente' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcidenteDto: UpdateAcidenteDto,
  ) {
    return this.acidenteService.update(+id, updateAcidenteDto);
  }

  @ApiOperation({ summary: 'Excluir um acidente pelo ID' })
  @ApiResponse({ status: 200, description: 'Acidente excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Acidente não encontrado.' })
  @ApiParam({ name: 'id', type: Number, description: 'ID do acidente' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acidenteService.remove(+id);
  }
}
