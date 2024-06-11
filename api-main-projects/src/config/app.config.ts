import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookies from "cookie-parser";
import helmet from "helmet";

import dotenv from "dotenv";
// import { errorHandler } from '../middlewares/errorHandler';
// import { rateLimiter } from '../../middlewares/rateLimiter';
import { CacheManager } from '../interfaces/ICacheManager';
import cacheHandler from '../utils/cacheHandler';
dotenv.config();

export const dbName = process.env.MONGO_DB || "db_tools";
export const USE_MOCK = process.env.USE_MOCK || false;
export const MOCK_FOLDER = process.env.MOCK_FOLDER || "./mock";

export const APP_PORT = process.env.APP_PORT || 8080;
export const ORIGIN = process.env.ORIGIN || "*";
CacheManager.default = cacheHandler

const app = express();
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookies());

app.use(
    cors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    })
)

// app.use(errorHandler);
// app.use(rateLimiter);

export default app
