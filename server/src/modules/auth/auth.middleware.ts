import passport = require('passport');

export const jwtAuth = passport.authenticate('jwt', { session: false });
export const fbAuth = passport.authenticate('fb', { session: false });

export const isAdmin = (req, res, next) => {
  if (req.user.role === 'admin') return next();
  return res.status(401).json('Unauthorized');
};
