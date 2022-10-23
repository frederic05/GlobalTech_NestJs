import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AddUserDto } from './dto/addUserDto';
import { GetItemDto } from './dto/getItemDto';
import { User } from './userIterface';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('v2')
  getTodo() {
    return this.todoService.getTodo();
  }

  @Get('/:id')
  getTodoId(@Param() mesParam) {
    const { id } = mesParam;
    return this.todoService.getTodoId(+id);
  }

  //Query params
  @Get()
  getTodoQueryParams(@Query() queryParams: GetItemDto) {
    return this.todoService.getTodoQueryParams(queryParams);
  }

  //recupération du body d'une requette
  @Post()
  addTodo(@Body() newTodo: AddUserDto): User {
    return this.todoService.addTodo(newTodo);
  }

  @Delete(':id')
  suprimeUser(@Param() idParam) {
    return this.todoService.suprimeUser(+idParam);
  }

  @Put(':id')
  updateTodo(@Param() iddex, @Body() newTodo: Partial<AddUserDto>) {
    return this.todoService.updateTodo(+iddex, newTodo);
  }
}
