import { profiles } from "../../models/profiles.model.mjs";

const getAllProfiles = async (req, res) => {
  res.status(200).json(profiles);
}

const addProfile = async (req, res) => {
    const { name } = req.body;
    const profile = { name };
    res.status(201).json(profile);
};

const updateProfile = async (req, res) => {
    const { id } = req.params;
    const profile = { id };
    res.status(200).json(profile);
}

export { getAllProfiles, addProfile, updateProfile };