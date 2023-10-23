import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const cors ={
    origin:['http://localhost:300'],
    methods:'GET,POST,HEAD,PUT,PATCH,DELETE,OPTIONS'
  }

  app.enableCors(cors)

  await app.listen(3000);
}
bootstrap();
