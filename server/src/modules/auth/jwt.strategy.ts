import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions
} from 'passport-jwt';
import userSchema from '../users/user.model';

const jwtOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET
};

const jwt = async (payload, done) => {
  try {
    const user = await userSchema.findById(payload.sub);
    if (user) return done(null, user);
  } catch (error) {
    return done(error, false);
  }
};

export default new JwtStrategy(jwtOptions, jwt);
