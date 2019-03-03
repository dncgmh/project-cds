import postService from '../posts/post.service';
import userService from '../users/user.service';
import BaseResponse from '../../utils/baseResponse';

export default {
  async approveCert(req, res, next) {
    try {
      const user = await userService.findById(req.body.userId);
      user.state = req.body.state;
      await user.save();
      return new BaseResponse({
        statusCode: 200,
        data: {
          certs: await userService.findUnapprovedCerts()
        }
      }).json(res);
    } catch (error) {
      next(error);
    }
  },
  async approvePost(req, res, next) {
    try {
      const post = await postService.findById(req.body.postId);
      post.state = req.body.state;
      await post.save();
      return new BaseResponse({
        statusCode: 200,
        data: {
          posts: await postService.findUnapprovedPost()
        }
      }).json(res);
    } catch (error) {
      next(error);
    }
  },
  async getPost(req, res, next) {
    try {
      const posts = await postService.findUnapprovedPost();
      return new BaseResponse({ statusCode: 200, data: { posts } }).json(res);
    } catch (error) {
      next(error);
    }
  },
  async getCerts(req, res, next) {
    try {
      const certs = await userService.findUnapprovedCerts();
      return new BaseResponse({
        statusCode: 200,
        data: {
          certs
        }
      }).json(res);
    } catch (error) {
      next(error);
    }
  }
};
