import { Controller, Get, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('todo')
export class TodoController {
  @Get()
  getTodo(@Req() req: Request, @Res() res: Response) {
    console.log('la liste des todo');
    res.status(200).send({ message: 'la liste des todo' });
  }

  @Post()
  addTodo(): string {
    return 'post todo';
  }

  @Put()
  updateTodo(): string {
    return 'mises à jour todo';
  }
}
