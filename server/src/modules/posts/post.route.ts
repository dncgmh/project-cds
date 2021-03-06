import * as express from 'express';
import postController from './post.controller';
import validateMiddeware, { Type } from '../../utils/validateMiddeware';
import { CreatePostDto } from './create-post.dto';
import { jwtAuth } from '../auth/auth.middleware';
const router = express.Router();

router.get('/', postController.getApprovedPost);
router.get('/:postId', postController.getPost);
router.post(
  '/post',
  jwtAuth,
  validateMiddeware(CreatePostDto, Type.body),
  postController.uploadPost
);

export { router as postRouter };
