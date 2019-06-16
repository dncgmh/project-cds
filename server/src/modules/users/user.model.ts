import { Schema, Model, model } from 'mongoose';
import { IUserDocument } from './user.interface';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';

export interface IUser extends IUserDocument {
  comparePassword(password: string): boolean;
  generateHash(password: string): string;
  transform(): object;
}
export interface IUserModel extends Model<IUser> {}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    emailToken: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    firstName: String,
    lastName: String,
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    picture: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      enum: ['admin', 'manager', 'user'],
      required: true,
      default: 'user'
    },
    facebook: {
      id: String,
      token: String,
      email: String,
      name: String
    },
    image: {
      selfie: String,
      frontIdentityCard: String,
      backIdentityCard: String
    },
    state: {
      type: String,
      enum: ['approved', 'pending', 'rejected'],
      default: 'pending'
    },
    ref: {
      type: String,
      index: true
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre<IUser>('save', async function(next): Promise<void> {
  const user = this;
  if (this.isNew) {
    user.emailToken = crypto.randomBytes(16).toString('hex');
    user.ref = crypto.randomBytes(10).toString('hex');
  }
  if (this.isModified('password') || this.isNew) {
    const hash = await user.schema.methods.generateHash(this.password);
    user.password = hash;
  }
  return next();
});

UserSchema.methods = {
  generateHash(password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },

  comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
  },

  transform() {
    const { password, emailToken, facebook, ...transformed } = this.toObject();
    return transformed;
  }
};

export const UserModel: IUserModel = model<IUser, IUserModel>(
  'User',
  UserSchema
);

export default UserModel;
