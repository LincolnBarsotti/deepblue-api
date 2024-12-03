import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class ResolucaoDto {
  @ApiProperty({ example: 'João Silva', description: 'Nome do responsável pela resolução' })
  @IsString()
  responsavel: string;

  @ApiProperty({ example: '2024-01-20', description: 'Data da resolução do acidente' })
  @IsDateString()
  data: string;

  @ApiProperty({ example: 'Reparo feito com sucesso.', description: 'Descrição da resolução' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: 1500.0, description: 'Custo total da resolução' })
  @IsNumber()
  custo_total: number;
}

export class CreateAcidenteDto {
  @ApiProperty({ example: 'Vazamento de Óleo', description: 'Título do acidente' })
  @IsString()
  titulo: string;

  @ApiProperty({ example: 'Ambiental', description: 'Tipo do acidente' })
  @IsString()
  tipo: string;

  @ApiProperty({ example: 'Fechado', description: 'Situação do acidente' })
  @IsString()
  situacao: string;

  @ApiProperty({ example: '2024-01-15', description: 'Data do acidente' })
  @IsDateString()
  data: string;

  @ApiProperty({ example: '10:30', description: 'Horário do acidente' })
  @IsString()
  horario: string;

  @ApiProperty({ example: 'Descrição do acidente.', description: 'Descrição detalhada do acidente' })
  @IsString()
  descricao: string;

  @ApiProperty({ required: false, type: ResolucaoDto, description: 'Detalhes da resolução do acidente' })
  @IsOptional()
  @ValidateNested()
  @Type(() => ResolucaoDto)
  resolucao?: ResolucaoDto;
}
