import {
  Strategy as FbStrategy,
  StrategyOption,
  VerifyFunction
} from 'passport-facebook';
import userService from '../users/user.service';

const fbOptions: StrategyOption = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  profileFields: ['id', 'email', 'first_name', 'last_name'],
  callbackURL: 'localhost:3000/12345'
};

// new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret:  process.env.FACEBOOK_APP_SECRET,
//     callbackURL: "http://www.example.com/auth/facebook/callback"
//   },
const fb = async (accessToken, refreshToken, profile, done) => {
  console.log(accessToken, refreshToken, profile, done);
  // userService.findOrCreate(..., function(err, user) {
  //   if (err) { return done(err)}
  //   done(null, user);
  // });
};

export default new FbStrategy(fbOptions, fb);
