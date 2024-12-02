import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Conecta ao Prisma no momento da inicialização do módulo
  async onModuleInit() {
    await this.$connect();
  }

  // Habilita o fechamento do Prisma quando a aplicação NestJS for encerrada
//   async enableShutdownHooks(app: INestApplication) {
//     this.$on('beforeExit', async () => {
//       await app.close(); // Corrigido: Chamei o método como uma função
//     });
//   } 
}
