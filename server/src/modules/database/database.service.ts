import * as mongoose from 'mongoose';
var options: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  autoIndex: true,
  useCreateIndex: true,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
};
export default {
  connect: (): void => {
    mongoose.connect(process.env.DB_URI, options, err => {
      console.log(err || 'Database Connected');
    });
  }
};
