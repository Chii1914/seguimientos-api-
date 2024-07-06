import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true, // Specify the origin you want to allow
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization', // Include Authorization
    credentials: true,
  });

  app.setGlobalPrefix("api/");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              //Usuario envía cosas que no corresponda
      forbidNonWhitelisted: true,   //No permite enviar cosas que no correspondan
      transform: true,              //Transforma los datos que recibe a los tipos que se le indican
    })
  );
  await app.listen(process.env.OPERATION_PORT || 3000);
}
bootstrap();
