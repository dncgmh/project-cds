import { Schema, Model, model } from 'mongoose';
import { IPostDocument } from './post.interface';
import LikeSchema from './like.model';

export interface IPost extends IPostDocument {}
export interface IPostModel extends Model<IPost> {}

const PostSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    link: {
      type: String,
      trim: true,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      enum: ['music', 'comedy', 'film']
    },
    description: {
      type: String,
      required: true
    },
    picture: {
      type: String
    },
    state: {
      type: String,
      enum: ['approved', 'pending', 'rejected'],
      default: 'pending'
    },
    likeBy: [LikeSchema]
  },
  {
    timestamps: true
  }
);

export const PostModel: IPostModel = model<IPost, IPostModel>('post', PostSchema);

export default PostModel;
