import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
  @Prop({ type: String, required: true })
  nome: string;

  @Prop({ type: String, required: true })
  login: string;

  @Prop({ type: String, required: true })
  senha: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
