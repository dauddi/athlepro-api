import express from 'express';
import { PROFILES } from './utils/constants.mjs';

/**
 * Import all the routes here
 */
import { profilesRouter } from './routes/index.mjs';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(PROFILES, profilesRouter);

export default app;