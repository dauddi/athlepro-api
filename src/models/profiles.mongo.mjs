import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	sports: {
		type: [String],
		required: true,
	},
	team: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	address: {
		street: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		zipCode: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
	},
});

export default mongoose.model("Profile", ProfileSchema);
