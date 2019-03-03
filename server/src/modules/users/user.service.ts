import UserModel, { IUser } from './user.model';
import { CreateUserDto } from './create-user.dto';
import { isEmpty } from 'lodash';
import { State } from './user.interface';
import * as crypto from 'crypto';
import BaseError from '../../utils/baseError';

export default {
  async findOne({ email }): Promise<IUser> {
    const user = await UserModel.findOne({ email }).exec();
    if (user) return user;
    throw new BaseError({
      statusCode: 401,
      error: 'Login error.',
      errors: {
        email: 'email does not exist'
      }
    });
  },
  async findById(userId): Promise<IUser> {
    const user = await UserModel.findById(userId).exec();
    return user;
  },
  async createOne(CreateUserDto: CreateUserDto) {
    {
      const newUser = await new UserModel(CreateUserDto).save();
      if (newUser) return newUser;
      throw new BaseError({ statusCode: 400, error: 'New user is invalid' });
    }
  },
  async saveImageCert(user: IUser, files): Promise<IUser> {
    if (isEmpty(files) || !files.selfie || !files.front || !files.back)
      throw new BaseError({ statusCode: 400, error: 'Missing file.' });
    user.image = {
      selfie: files.selfie[0].path,
      frontIdentityCard: files.front[0].path,
      backIdentityCard: files.back[0].path
    };
    return await user.save();
  },
  async findUnapprovedCerts(): Promise<IUser[]> {
    return await UserModel.find({ state: State.pending });
  },
  async findOrCreate({
    id,
    name,
    firstName,
    lastName,
    email,
    picture
  }): Promise<IUser> {
    const user = await UserModel.findOne({ email });
    if (user) {
      if (user.facebook.id) return user;
      else {
        user.facebook = { email, id, name };
        return await user.save();
      }
    } else
      return await new UserModel({
        firstName,
        lastName,
        picture,
        email,
        password: crypto.randomBytes(60).toString('hex'),
        facebook: { id, email, name }
      }).save();
  }
};