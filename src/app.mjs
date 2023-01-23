import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
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
app.use(
	cors({
		origin: ["http://localhost:3000", "https://athlepro.netlify.app"],
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(PROFILES, profilesRouter);

export default app;
