import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';

export default {
  createToken({ _id }): object {
    const user = {
      sub: _id,
      exp: moment()
        .add(process.env.ACCESS_TOKEN_LIFE, 's')
        .unix(),
      iat: moment().unix()
    };
    const accessToken =
      'jwt ' + jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    return {
      expiresIn: 3600,
      accessToken
    };
  },
  createEmailOptions({ user, host }) {
    return {
      token: user.emailToken,
      name: user.firstName + ' ' + user.lastName,
      email: user.email,
      host
    };
  }
};
