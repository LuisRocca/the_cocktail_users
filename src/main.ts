import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Documentacion del API manejos de usuarios')
    .setDescription('Guia de peticiones para el uso del API para el consumo del servicio de clientes y roles del app Cocktals.app')
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addTag('roles')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
