import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateNoticiaDto {
  @ApiProperty({ description: 'Título da notícia', example: 'Novo sistema implantado com sucesso' })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description: 'Descrição detalhada da notícia',
    example: 'A implantação do novo sistema trouxe melhorias significativas para o setor.',
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    description: 'Data da notícia (formato ISO 8601)',
    example: '2024-11-20T00:00:00.000Z',
  })
  @IsDateString()
  @Transform(({ value }) => new Date(value)) // Converte para objeto Date automaticamente
  data: string;
}
