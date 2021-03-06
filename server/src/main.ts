import * as dotenv from 'dotenv';
dotenv.config();
console.log(process.env.PWD);
import * as express from 'express';
import databaseService from './modules/database/database.service';
import customLogger from './utils/customLogger';
import router from './routes';
import * as passport from 'passport';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import jwtStrategy from './modules/auth/jwt.strategy';
import { errorCatch, errorHandle } from './modules/commons/error.middleware';
import facebookStrategy from './modules/auth/facebook.strategy';

const PORT = process.env.PORT || 5000;

const app = express().use('*', cors());
databaseService.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use(customLogger);
app.use('/api', router);
app.use('/uploads', express.static(path.join(process.env.PWD, 'uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.env.PWD, '..', 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(
      path.join(process.env.PWD, '..', 'client/build', 'index.html')
    );
  });
}

//error
app.use(errorCatch, errorHandle);

app.listen(PORT, () => console.log(`server listen in port ${PORT}`));
