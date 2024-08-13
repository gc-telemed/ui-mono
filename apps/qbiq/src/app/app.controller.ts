import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { PrismaClient } from '../client';
import { DmmfService } from './de-sruc/services/dmmf.service';


const prisma = new PrismaClient({
  errorFormat: process.env.PROD !== 'true' ? 'pretty' : 'minimal'
});

@Controller()
export class AppController {
  constructor(private readonly dmmfService: DmmfService) {}

  @Get('/all/models')
  getModels() {
    return this.dmmfService.getDMMF().datamodel.models;
  }

  @Get('/all/model-names')
  getModelNames() {
    return this.dmmfService.getDMMF().datamodel.models
      .map(m => m.dbName ?? m.name);
  }

  @Get('/mini/:model')
  getMetaData(@Param('model') model: string) {
    const prismModel = (prisma as any)[model];
    if (prismModel) {
      return prismModel['fields'];
    } else {
      throw new NotFoundException()
    }
  }

  @Get('/full/:model')
  getFullMetaData(@Param('model') model: string) {
    const allModels = this.dmmfService.getDMMF().datamodel.models
    const selectedModel = allModels.find(mod => mod.dbName === model)
    if (selectedModel) {
      return selectedModel.fields;
    } else {
      throw new NotFoundException()
    }
  }
}
