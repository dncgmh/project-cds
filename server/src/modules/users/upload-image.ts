import * as multer from 'multer';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as mime from 'mime';
import { includes } from 'lodash';
import BaseError from '../../utils/baseError';

var dirName = `uploads/${new Date().getFullYear()}/${new Date().getMonth()}`;

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    !fs.existsSync(dirName) && mkdirp(dirName);
    cb(null, dirName);
  },
  filename: function(req, file, cb) {
    var filename = `${req.user._id}.${new Date().getTime()}.${mime.getExtension(
      file.mimetype
    )}`;
    cb(null, filename);
  }
});
var fileFilter = function(req, file, cb) {
  var allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];
  if (includes(allowedMimes, file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new BaseError({
        statusCode: 400,
        error: 'Image Error',
        errors: { [file.fieldname]: 'Invalid image format.' }
      })
    );
  }
};
var upload = multer({
  limits: { fileSize: 1024 * 1024 * 10 },
  storage,
  fileFilter
});

export const uploadAvatarMiddleware = upload.single('avatar');
export const uploadImageMiddleware = upload.single('image');
export const uploadCertImage = upload.fields([
  { name: 'selfie', maxCount: 1 },
  { name: 'front', maxCount: 1 },
  { name: 'back', maxCount: 1 }
]);
export const uploadEventMiddleware = upload.single('pictureFile');