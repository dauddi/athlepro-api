import * as dotenv from "dotenv";
import express from "express";
import { PROFILES } from "./utils/constants.mjs";

/**
 * Import all the routes here
 */
import { profilesRouter } from "./routes/index.mjs";

dotenv.config();

const app = express();

/**
 * Register express middlewares here
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(PROFILES, profilesRouter);

export default app;
