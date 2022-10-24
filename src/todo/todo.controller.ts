import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { AddUserDto } from './dto/addUserDto';
import { GetItemDto } from './dto/getItemDto';
import { User } from './userIterface';
import { UpperFusionPipe } from 'src/pipes/upper-fusion.pipe';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('v2')
  getTodo() {
    return this.todoService.getTodo();
  }

  @Get('/:id')
  getTodoId(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
      }),
    )
    id: number,
  ) {
    return this.todoService.getTodoId(id);
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
  suprimeUser(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
      }),
    )
    id: number,
  ) {
    return this.todoService.suprimeUser(id);
  }

  @Put(':id')
  updateTodo(@Param('iddex') iddex, @Body() newTodo: Partial<AddUserDto>) {
    console.log(iddex);
    return this.todoService.updateTodo(iddex, newTodo);
  }

  @Post('pipe')
  testPipile(@Body(UpperFusionPipe) data) {
    return data;
  }
}
