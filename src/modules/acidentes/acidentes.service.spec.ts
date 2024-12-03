import { Test, TestingModule } from '@nestjs/testing';
import { AcidentesService } from './acidentes.service';

describe('AcidentesService', () => {
  let service: AcidentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcidentesService],
    }).compile();

    service = module.get<AcidentesService>(AcidentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
