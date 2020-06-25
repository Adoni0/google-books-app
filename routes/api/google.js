import { Router } from 'express';
import googleController from '../../controllers/googleController';

var router = Router();

router.route('/').get(googleController.findAll())

export default router;