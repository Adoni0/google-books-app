import { Router } from 'express';
import googleController from '../../controllers/googleController';

var router = Router();

// routes to /api/google
router.route('/').get(googleController.findAll());


export default router;