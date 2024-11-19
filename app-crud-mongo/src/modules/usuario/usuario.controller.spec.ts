import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { getModelToken } from '@nestjs/mongoose';
import { Usuario } from './schemas/usuario.schema';

describe('UsuarioController', () => {
  let controller: UsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        UsuarioService,
        {
          provide: getModelToken(Usuario.name),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<UsuarioController>(UsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
