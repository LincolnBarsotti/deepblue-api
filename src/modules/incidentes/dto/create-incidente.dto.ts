import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateIncidenteDto {
  @ApiProperty({ description: 'Número do incidente', example: '1307/000022' })
  @IsString()
  @IsNotEmpty()
  Numero: string;

  @ApiProperty({ description: 'Empresa responsável', example: 'OGX PETRÓLEO E GÁS S.A. (08926302000105)' })
  @IsString()
  @IsNotEmpty()
  Empresa: string;

  @ApiProperty({ description: 'Data de criação do incidente', example: '2013-07-09' })
  @IsDateString()
  @IsNotEmpty()
  Data_de_criacao: string;

  @ApiProperty({ description: 'Autoridades comunicadas', example: 'Ministério da Previdência Social.' })
  @IsString()
  Autoridades_comunicadas: string;

  @ApiProperty({ description: 'Nome da instalação', example: 'Ocean Quest' })
  @IsString()
  Instalacao: string;

  @ApiProperty({ description: 'Data da primeira observação', example: '2013-06-26' })
  @IsDateString()
  @IsNotEmpty()
  Data_da_primeira_observacao: string;

  @ApiProperty({ description: 'Hora da primeira observação', example: '18:20' })
  @IsString()
  Hora_da_primeira_observacao: string;

  @ApiProperty({ description: 'Data estimada do incidente', example: '2013-06-26' })
  @IsDateString()
  Data_estimada_do_incidente: string;

  @ApiProperty({ description: 'Hora estimada do incidente', example: '18:20' })
  @IsString()
  Hora_do_incidente: string;

  @ApiProperty({ description: 'Número de feridos graves', example: 1 })
  @IsNumber()
  Numero_de_feridos_graves: number;

  @ApiProperty({ description: 'Número de fatalidades', example: 0 })
  @IsNumber()
  Numero_de_fatalidades: number;
}
