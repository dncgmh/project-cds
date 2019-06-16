import BaseError from '../../utils/baseError';
import BaseResponse from '../../utils/baseResponse';
import userService from './user.service';
import postService from '../posts/post.service';

export default {
  async uploadCert(req, res, next) {
    try {
      if (req.files) {
        var { user } = req;
        const updatedUser = await userService.saveImageCert(user, req.files);
        await userService.resizeImageCert(user);
        return new BaseResponse({
          statusCode: 201,
          message: 'You have successfully updated.',
          data: { user: updatedUser }
        }).json(res);
      }
      throw new BaseError({
        statusCode: 400,
        error: 'You have failed to update.'
      });
    } catch (error) {
      next(error);
    }
  },
  async getPosts(req, res, next) {
    try {
      const posts = await postService.findByUserId(req.user._id);
      console.log(posts);
      return new BaseResponse({
        statusCode: 200,
        data: {
          posts
        }
      }).json(res);
    } catch (error) {
      next(error);
    }
  }
};
