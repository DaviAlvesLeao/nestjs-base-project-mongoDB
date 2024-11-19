import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './schemas/usuario.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
  ) {}
  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioModel.create(createUsuarioDto);
  }

  findAll() {
    return this.usuarioModel.find();
  }

  findOne(id: string) {
    try {
      const user = this.usuarioModel.findById(id);
      return user;
    } catch (err: unknown) {
      throw err;
    }
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, {
      overwrite: false,
      new: true,
    });
  }

  remove(id: string) {
    return `This action removes a #${id} usuario`;
  }
}
