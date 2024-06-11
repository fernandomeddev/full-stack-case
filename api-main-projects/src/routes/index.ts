import express, { Router } from 'express';
import { serverController } from '../controller/serverController';
// import errorHandler from '../middlewares/errorHandler';

const app = express()
const router = Router()

router.get('/server_status', serverController);

app.use('/', router)

export default app
