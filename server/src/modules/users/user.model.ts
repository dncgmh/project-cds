import { Schema, Model, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { IUserDocument } from './user.interface';

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
    }
  },
  {
    timestamps: true
  }
);

UserSchema.pre<IUser>('save', async function(next): Promise<void> {
  const user = this;
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
    const transformed = {};
    const fields = [
      '_id',
      'email',
      'role',
      'firstName',
      'lastName',
      'gender',
      'picture',
      'isVerified',
      'image'
    ];
    fields.forEach(field => {
      transformed[field] = this[field];
    });
    return transformed;
  }
};

export const UserModel: IUserModel = model<IUser, IUserModel>(
  'User',
  UserSchema
);

export default UserModel;
