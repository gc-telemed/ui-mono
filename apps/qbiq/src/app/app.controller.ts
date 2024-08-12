import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { PrismaClient } from '../client';
import { DmmfService } from './de-sruc/services/dmmf.service';


const prisma = new PrismaClient({
  errorFormat: process.env.PROD !== 'true' ? 'pretty' : 'minimal'
});

@Controller()
export class AppController {
  constructor(private readonly dmmfService: DmmfService) {}

  @Get('/models')
  getModels() {
    return this.dmmfService.getDMMF().datamodel.models;
  }

  @Get('/meta/:model')
  getData(@Param('model') model: string) {
    const prismModel = (prisma as any)[model];
    if (prismModel) {
      return prismModel['fields'];
    } else {
      throw new NotFoundException()
    }
  }
}
