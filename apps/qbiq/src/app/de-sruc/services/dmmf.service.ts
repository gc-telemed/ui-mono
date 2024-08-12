import { Injectable } from '@nestjs/common';
import { BaseDMMF } from '@prisma/client/runtime/library';
import { Prisma } from 'apps/qbiq/src/client';

@Injectable()
export class DmmfService {

    getDMMF(): BaseDMMF {
        return Prisma.dmmf;
    }
}
