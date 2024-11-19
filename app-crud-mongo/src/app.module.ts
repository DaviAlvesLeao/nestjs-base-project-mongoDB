import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsuarioModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
console.log(process.env.MONGO_URL);
