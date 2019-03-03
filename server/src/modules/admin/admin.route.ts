import * as express from 'express';
import adminController from './admin.controller';
const router = express.Router();

router.post('/approve-post', adminController.approvePost);
router.post('/approve-cert', adminController.approveCert);
router.get('/certs', adminController.getCerts);
router.get('/posts', adminController.getPost);

export { router as adminRouter };
