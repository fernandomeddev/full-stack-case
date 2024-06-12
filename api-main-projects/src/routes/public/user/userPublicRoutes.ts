import { Router } from 'express';
import { userSignupController } from '../../../controllers/user/userSignupController';

const router = Router()

router.post('/signup', userSignupController);

export default router