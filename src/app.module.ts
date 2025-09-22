import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule {}
