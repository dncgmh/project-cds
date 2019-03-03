import * as express from 'express';
import userController from './user.controller';
import { uploadCertImage } from './upload-image';
const router = express.Router();

router.post('/cert-image', uploadCertImage, userController.uploadCert);
router.get('/posts', userController.getPosts);

export { router as userRouter };
