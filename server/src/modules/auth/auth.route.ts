import * as express from 'express';
import authController from './auth.controller';
import { LoginUserDto } from '../users/login-user.dto';
import { CreateUserDto } from '../users/create-user.dto';
import { jwtAuth } from './auth.middleware';
import validateMiddeware, { Type } from '../../utils/validateMiddeware';
const router = express.Router();

router.get('/', jwtAuth, authController.getAuth);
router.post(
  '/login',
  validateMiddeware(LoginUserDto, Type.body),
  authController.login
);

router.post('/facebook', authController.loginWithFb);

router.post(
  '/register',
  validateMiddeware(CreateUserDto, Type.body),
  authController.register
);

router.get('/verify/:token', authController.verifyEmail);

export { router as authRouter };
