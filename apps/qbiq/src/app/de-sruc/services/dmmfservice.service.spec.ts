import { Test, TestingModule } from '@nestjs/testing';
import { DmmfserviceService } from './dmmfservice.service';

describe('DmmfserviceService', () => {
  let service: DmmfserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DmmfserviceService],
    }).compile();

    service = module.get<DmmfserviceService>(DmmfserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
