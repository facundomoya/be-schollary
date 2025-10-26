import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common'; // Importa ValidationPipe
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración del ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina las propiedades que no están definidas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no definidas
      transform: true, // Transforma los objetos de entrada a instancias de la clase DTO
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) => {
          if (error.constraints && error.constraints['whitelistValidation']) {
            return `El campo '${error.property}' no está permitido.`;
          }
          return Object.values(error.constraints || {}).join(', ');
        });
        return new (require('@nestjs/common').BadRequestException)(messages);
      }
    })
  );

  const config = new DocumentBuilder()
    .setTitle('API Backend Schollary')
    .setDescription('API para la gestion de la plataforma Schollary')
    .setVersion('1.1')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
