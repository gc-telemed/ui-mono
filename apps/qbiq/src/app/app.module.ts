import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DmmfService } from './de-sruc/services/dmmf.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DmmfService],
})
export class AppModule {}
