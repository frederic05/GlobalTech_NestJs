import {
  IsString,
  IsNumber,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class AddUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6, {
    message: 'la taille minimum est 6 caractères !',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty({
    message: 'le champs age est obligatoire',
  })
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
