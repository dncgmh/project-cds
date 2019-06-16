import userService from '../users/user.service';
import { LoginUserDto } from '../users/login-user.dto';
import { Response } from 'express';
import authService from './auth.service';
import { IUser } from '../users/user.model';
import BaseError from '../../utils/baseError';
import facebook from './facebook.provider';
import BaseResponse from '../../utils/baseResponse';
import { sendMail } from './mailer.service';

export default {
  getAuth(req, res, next) {
    return new BaseResponse({
      statusCode: 200,
      data: { user: req.user.transform() }
    }).json(res);
  },
  login: async (req, res: Response, next) => {
    try {
      const userLogin: LoginUserDto = req.body;
      const user: IUser = await userService.findOne(userLogin);
      if (user && user.comparePassword(userLogin.password)) {
        let token = authService.createToken(user);
        new BaseResponse({
          statusCode: 200,
          message: 'You have successfully logged in to your account.',
          data: { user: user.transform(), token }
        }).json(res);
      } else throw new BaseError({ statusCode: 401 });
    } catch (error) {
      next(error);
    }
  },
  register: async (req, res, next) => {
    try {
      const newUser = await userService.createOne(req.body);
      sendMail(
        authService.createEmailOptions({
          user: newUser,
          host: req.headers.host
        })
      );
      userService.findAndAssignRef(req.body.ref, newUser);
      return new BaseResponse({
        statusCode: 201,
        message: `You have successfully registered an account. 
        Check the verified email in your inbox.`,
        data: { user: newUser }
      }).json(res);
    } catch (error) {
      next(error);
    }
  },
  loginWithFb: async (req, res, next) => {
    try {
      const { accessToken } = req.body;
      const data = await facebook(accessToken);
      const user = await userService.findOrCreate(data);
      let token = authService.createToken(user);
      new BaseResponse({
        statusCode: 200,
        message: 'You have successfully logged in to your account.',
        data: { user: user.transform(), token }
      }).json(res);
    } catch (error) {
      next(error);
    }
  },
  verifyEmail: async (req, res, next) => {
    try {
      let user = await userService.findByEmailToken(req.params.token);
      if (!user) return res.send('<h1>Xác thực thất bại!!</h1>');
      else {
        user.isVerified = true;
        user.emailToken = '';
        await user.save();
        return res.send(`<html>
              <head>
                  <meta http-equiv="refresh" content="5;url=http://${
                    req.headers.host
                  }" />
              </head>
              <body>
                  <h1>Email của bạn đã được xác thực!!</h1>
                  <p>Bạn sẽ được chuyển tới trang chủ trong 5s...</p>
              </body>
          </html>`);
      }
    } catch (error) {
      next(error);
    }
  }
};
