import * as mongoose from 'mongoose';
var options = {
  useNewUrlParser: true,
  autoIndex: true,
  useCreateIndex: true
};
export default {
  connect: (): void => {
    mongoose.connect(
      `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_COLLECTION}`,
      options,
      err => {
        console.log(err || 'Database Connected');
      }
    );
  }
};
