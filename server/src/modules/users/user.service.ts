import UserModel, { IUser } from './user.model';
import { CreateUserDto } from './create-user.dto';
import { isEmpty } from 'lodash';
import { State } from './user.interface';
import * as crypto from 'crypto';
import BaseError from '../../utils/baseError';
import resize from 'utils/resize-image';
import RefModel from './ref.model';

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
      try {
        const newUser = await new UserModel(CreateUserDto).save();
        if (newUser) return newUser;
      } catch (error) {
        throw new BaseError({ statusCode: 400, error: 'New user is invalid' });
      }
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
  async resizeImageCert(user: IUser) {
    await [
      resize(user.image.selfie),
      resize(user.image.frontIdentityCard),
      resize(user.image.backIdentityCard)
    ];
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
  },
  async findByEmailToken({ emailToken }) {
    return await UserModel.findOne({ emailToken });
  },
  async findAndAssignRef(ref, userRef) {
    const user = await UserModel.findOne({ ref });
    if (user) {
      const ref = await RefModel.findOne({ userId: user._id });
      if (ref) ref.update({ $addToSet: { userRef } });
      else await new RefModel({ userId: user._id, userRef: [userRef] });
    }
  },
  async findRefed(ref) {
    const user = await UserModel.findOne({ ref });
    return user;
  }
};
