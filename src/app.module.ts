import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CalculateService } from './calculate.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CalculateService],
})
export class AppModule {}
