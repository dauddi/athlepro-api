import profiles from "./profiles.mongo.mjs";

class Profile {
	constructor(profile) {
		this.id = profile.id ?? undefined;
		this.firstName = profile.firstName;
		this.lastName = profile.lastName;
		this.gender = profile.gender;
		this.dateOfBirth = profile.dateOfBirth;
		this.sports = profile.sports;
		this.team = profile.team;
		this.address = profile.address;
		this.description = profile.description;
	}

	save() {
		const profile = new profiles(this);
		return profile.save(this);
	}

	updateProfile() {
		return profiles.updateOne({ _id: this.id }, this);
	}

	static fetchAll() {
		return profiles.find();
	}
}

export default Profile;
