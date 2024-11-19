import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  //app.useGlobalPipes(new ValidateInputPipe()); To validation
  // app.useLogger(app.get(LogsService)); // To log the application
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
