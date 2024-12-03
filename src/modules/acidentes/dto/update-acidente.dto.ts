import { PartialType } from '@nestjs/swagger';
import { CreateAcidenteDto } from './create-acidente.dto';

export class UpdateAcidenteDto extends PartialType(CreateAcidenteDto) {}
