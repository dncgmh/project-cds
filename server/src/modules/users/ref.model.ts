import { Schema, Model, model } from 'mongoose';
import { IRefDocument } from './user.interface';

export interface IRref extends IRefDocument {}
export interface IRefModel extends Model<IRref> {}

const RefSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    index: true,
    ref: 'User'
  },
  userRef: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

export const RefModel: IRefModel = model<IRref, IRefModel>('ref', RefSchema);

export default RefModel;
