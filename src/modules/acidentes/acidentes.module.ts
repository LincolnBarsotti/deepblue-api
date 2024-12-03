import { Module } from '@nestjs/common';
import { AcidenteService } from './acidentes.service';
import { AcidenteController } from './acidentes.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [AcidenteController],
  providers: [AcidenteService, PrismaService],
})
export class AcidentesModule {}
