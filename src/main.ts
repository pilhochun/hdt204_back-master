import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const config = new DocumentBuilder()
      .setTitle('HDT204 API')
      .setDescription('HDT204 BACK-END API 문서')
      .setVersion('0.0.1')
      // .addBearerAuth(
      //   { type: 'http', scheme: 'bearer', bearerFormat: 'Token' },
      //   'access-token',
      // )
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}
bootstrap();
