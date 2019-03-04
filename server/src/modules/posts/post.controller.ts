import { CreatePostDto } from './create-post.dto';
import postService from './post.service';
import BaseResponse from '../../utils/baseResponse';

export default {
  async uploadPost(req, res, next) {
    try {
      const newPost: CreatePostDto = req.body;
      const post = await postService.createOne({
        userId: req.user._id,
        ...newPost
      });
      if (post)
        return new BaseResponse({
          statusCode: 201,
          message: 'You have successfully posted.',
          data: { post }
        }).json(res);
    } catch (error) {
      next(error);
    }
  },
  async getApprovedPost(req, res, next) {
    try {
      const posts = await postService.findApprovedPost();
      return new BaseResponse({
        statusCode: 200,
        data: { posts }
      }).json(res);
    } catch (error) {
      next(error);
    }
  },
  async getPost(req, res, next) {
    try {
      const post = await postService.findById(req.params.postId);
      return new BaseResponse({
        statusCode: 200,
        data: { post }
      }).json(res);
    } catch (error) {
      next(error);
    }
  }
};
