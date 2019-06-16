import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
enum Gender {
  male,
  female
}
enum Role {
  admin,
  manager,
  user
}

interface Facebook {
  id: string;
  token?: string;
  email: string;
  name: string;
}

export interface ImageKyc {
  selfie: string;
  frontIdentityCard: string;
  backIdentityCard: string;
}

export interface IRefDocument extends Document {
  userId: ObjectId;
  userRef: ObjectId[];
}

export enum State {
  approved = 'approved',
  pending = 'pending',
  rejected = 'rejected'
}

export interface IUserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  emailToken: string;
  age?: number;
  password: string;
  isVerified: boolean;
  picture?: string;
  role: Role;
  gender?: Gender;
  facebook?: Facebook;
  image: ImageKyc;
  state: State;
  ref: string;
}
