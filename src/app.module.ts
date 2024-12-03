import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { IncidentesModule } from './modules/incidentes/incidentes.module';

@Module({
  imports: [UserModule, IncidentesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
