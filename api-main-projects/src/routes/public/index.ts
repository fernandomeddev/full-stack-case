import express from 'express';
import userPublicRoutes from '../public/user/userPublicRoutes'

const app = express();
app.use('/user', userPublicRoutes );

export default app;