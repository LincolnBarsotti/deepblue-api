import { Module } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { IncidentesController } from './incidentes.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [IncidentesController],
  providers: [IncidentesService, PrismaService],
})
export class IncidentesModule {}
