import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { getModelToken } from '@nestjs/mongoose';
import { Usuario } from './schemas/usuario.schema';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: getModelToken(Usuario.name),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
