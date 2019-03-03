import * as mongoose from 'mongoose';
var options: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  autoIndex: true,
  useCreateIndex: true,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
};
console.log(process.env.DB_PORT);
export default {
  connect: (): void => {
    mongoose.connect(
      `mongodb://admin:123acb@ds026898.mlab.com:26898/cds`,
      options,
      err => {
        console.log(err || 'Database Connected');
      }
    );
  }
};
