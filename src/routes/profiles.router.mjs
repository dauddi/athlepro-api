import express from "express";
import {
	getAllProfiles,
	addProfile,
	updateProfile,
} from "../controllers/index.mjs";

const profilesRouter = express.Router();

profilesRouter.get("/", getAllProfiles);
profilesRouter.post("/", addProfile);
profilesRouter.patch("/:id", updateProfile);

export default profilesRouter;
