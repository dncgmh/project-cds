import { Schema, model, Model } from 'mongoose';
import { ILikeDocument } from './post.interface';

// export interface ILike extends ILikeDocument {}
// export interface ILikeModel extends Model<ILike> {}

const LikeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user'
    }
  },
  {
    timestamps: true
  }
);

export default LikeSchema;
// export const LikeModel: ILikeModel = model<ILike, ILikeModel>('post', LikeSchema);

// export default LikeModel;
