import * as express from 'express';
import { authRouter } from './modules/auth/auth.route';
import { userRouter } from './modules/users/user.route';
import { postRouter } from './modules/posts/post.route';
import { jwtAuth, isAdmin } from './modules/auth/auth.middleware';
import { adminRouter } from './modules/admin/admin.route';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json('home');
});

router.use('/auth', authRouter);
router.use('/user', jwtAuth, userRouter);
router.use('/post', postRouter);
router.use('/admin', jwtAuth, isAdmin, adminRouter);

export default router;
