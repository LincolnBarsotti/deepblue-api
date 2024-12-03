import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { IncidentesModule } from './modules/incidentes/incidentes.module';
import { AcidentesModule } from './modules/acidentes/acidentes.module';

@Module({
  imports: [UserModule, IncidentesModule, AcidentesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
