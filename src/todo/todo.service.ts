import { Injectable, NotFoundException } from '@nestjs/common';
import { AddUserDto } from './dto/addUserDto';
import { User } from './userIterface';

@Injectable()
export class TodoService {
  constructor() {
    this.userTodo = [];
  }

  userTodo: User[];
  getTodo() {
    return this.userTodo;
  }

  getTodoId(id: number) {
    const obj = this.userTodo.find((e) => e.id === id);
    if (obj) return obj;
    throw new NotFoundException('aucune données trouvés');
  }

  //Query params
  getTodoQueryParams(queryParams) {
    return queryParams;
  }

  //recupération du body d'une requette
  addTodo(newTodo: AddUserDto): User {
    const { name, age, email } = newTodo;
    let id;
    try {
      if (this.userTodo.length) {
        id = this.userTodo[this.userTodo.length - 1].id + 1;
      } else {
        id = 1;
      }

      return {
        id,
        name,
        age,
        email,
      };
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  suprimeUser(idParam: number) {
    const index = this.userTodo.findIndex((e) => e.id === idParam);
    if (index >= 1) {
      this.userTodo.splice(index, 1);
    } else {
      throw new NotFoundException('utilisateur introuvable');
    }
    return this.userTodo;
  }

  updateTodo(iddex: number, newTodo) {
    let reccord = this.getTodoId(iddex);
    reccord = {
      ...reccord,
      ...newTodo,
    };
    return reccord;
  }
}
