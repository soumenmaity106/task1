const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
	{
		name: {
			type: String,
			trim: true
		},
		email: {
			type: String,
			lowercase: true,
			trim: true
		},
		phone: {
			type: String,
			trim: true
		},
		userName: {
			type: String,
			trim: true
		},
		password: {
			type: String,
			trim: true
		},
		user_role: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User_Role"
		}
	},
	{ timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
