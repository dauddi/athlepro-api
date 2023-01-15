import express from 'express';
import { getAllProfiles, addProfile, updateProfile } from './profiles.controller.mjs';

const profilesRouter = express.Router();

profilesRouter.get("/", getAllProfiles);
profilesRouter.post("/", addProfile);
profilesRouter.put("/:id", updateProfile);

export default profilesRouter;