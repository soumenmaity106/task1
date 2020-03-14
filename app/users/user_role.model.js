const mongoose = require("mongoose");

const User_Role = mongoose.Schema({
	user_role: {
		type: String,
		default: null,
		trim: true
	}
});
module.exports = mongoose.model("User_Role", User_Role);
