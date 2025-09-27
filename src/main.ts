declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  // to use extended query parser
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('query parser', 'extended');

  await app.listen(process.env.PORT ?? 3000);

  // config hot reload 
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  // paste vao package.json de config scrtip auto reload cho dev
    // "start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch",
   
}
bootstrap();
