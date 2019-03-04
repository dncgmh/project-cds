import { Document } from 'mongoose';
import { ObjectId } from 'bson';
import { State } from '../users/user.interface';

export enum Genre {
  'music',
  'comedy',
  'film'
}

export interface IPostDocument extends Document {
  readonly userId: ObjectId;
  readonly link: string;
  readonly subject: string;
  readonly genre: Genre;
  readonly description: string;
  picture?: string;
  state: State;
}
