import { IsEmail, Length, IsEnum, IsString } from 'class-validator';
// enum Gender {
//   'male',
//   'female'
// }

export class CreateUserDto {
  @IsEmail()
  email: string;
  @Length(6, 24)
  password: string;
  // @IsEnum(Gender)
  // gender: Gender;
  @IsString()
  @Length(1, 20)
  firstName: string;
  @Length(1, 20)
  lastName: string;
}
