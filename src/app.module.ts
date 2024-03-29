import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [PrismaModule, ReservasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
