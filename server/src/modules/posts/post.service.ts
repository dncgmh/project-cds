import { CreatePostDto } from './create-post.dto';
import PostModel, { IPost } from './post.model';
import { State } from '../users/user.interface';
import axios from 'axios';

export default {
  async createOne(createPostDto: CreatePostDto): Promise<IPost> {
    console.log(createPostDto);
    return await new PostModel(createPostDto).save();
  },
  async findByUserId(userId): Promise<IPost[]> {
    return await PostModel.find({ userId });
  },
  async findById(postId): Promise<IPost> {
    return await PostModel.findById(postId);
  },
  async findUnapprovedPost(): Promise<IPost[]> {
    return await PostModel.find({ state: State.pending }).populate(
      'userId',
      'id'
    );
  },
  async findApprovedPost(): Promise<IPost[]> {
    return await PostModel.find({ state: State.approved }).populate('userId', [
      'firstName',
      'lastName'
    ]);
  }
};
