import { Length, IsEnum, IsMongoId } from 'class-validator';
import { Genre } from './post.interface';
import { ObjectId } from 'bson';

export class CreatePostDto {
  userId?: ObjectId;
  @Length(1, 256)
  link: string;
  @Length(6, 256)
  subject: string;
  @IsEnum(Genre)
  genre: Genre;
  @Length(1, 9999)
  description: string;
}
