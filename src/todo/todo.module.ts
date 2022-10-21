import { Global, Module } from '@nestjs/common';
import { TodoController } from './todo.controller';

@Global()
@Module({
  imports: [],
  exports: [],
  controllers: [TodoController],
  providers: [],
})
export class TodoModule {}
