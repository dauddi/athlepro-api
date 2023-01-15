import Profile from "../models/profiles.model.mjs";

const getAllProfiles = async (req, res) => {
	try {
		const profiles = await Profile.fetchAll();
		res.status(200).json(profiles);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const addProfile = async (req, res) => {
	try {
		const profile = new Profile(req.body);
		const result = await profile.save();
		res.status(201).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateProfile = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id)
			return res
				.status(400)
				.json({ message: "param: profileID is required to update" });
		const profile = new Profile({ ...req.body, id });
		const result = await profile.updateProfile();
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export { getAllProfiles, addProfile, updateProfile };
