import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitando CORS
  app.enableCors({
    origin: '*', // Permite todas as origens (você pode restringir a origens específicas aqui)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept, Authorization', // Cabeçalhos permitidos
  });

  const config = new DocumentBuilder()
    .setTitle('UPX - V: DEEPBLUE')
    .setDescription(
      'O deepblue é uma aplicação feita para empresas que buscam o gerenciamento de seus incidentes e acidentes nas plataformas de petróleo',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}

bootstrap();
