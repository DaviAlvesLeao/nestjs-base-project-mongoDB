import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    { message: 'senha does not match the requirements.' },
  )
  readonly senha: string;
}
