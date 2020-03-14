const User = require("./user.model");
const UserRole = require("./user_role.model");
const bcriptjs = require("bcryptjs");
const errorMassage = require("../message/errormessage");
const ObjectID = require("mongodb").ObjectID;
exports.register = async (req, res) => {
	try {
		const userrole = await UserRole.find({ user_role: "Admin" });
		if (userrole.length >= 1) {
			const manualobjectId = new ObjectID();
			const userole = new UserRole({
				_id: manualobjectId,
				user_role: "User"
			});
			const saveuserrole = await userole.save();
			const { name, email, phone, userName, password } = req.body;
			const user = new User({
				name,
				email,
				phone,
				userName,
				password: bcriptjs.hashSync(password, 8),
				user_role: manualobjectId
			});
			const usersave = await user.save();
			if (usersave) {
				res.json({
					status: 1,
					msg: "You have successfully registered and logged in"
				});
			}
		} else {
			const manualobjectId = new ObjectID();
			const userole = new UserRole({
				_id: manualobjectId,
				user_role: "Admin"
			});
			const saveuserrole = await userole.save();
			const { name, email, phone, userName, password } = req.body;
			const user = new User({
				name,
				email,
				phone,
				userName,
				password: bcriptjs.hashSync(password, 8),
				user_role: manualobjectId
			});
			const usersave = await user.save();
			if (usersave) {
				res.json({
					status: 1,
					msg: "You have successfully registered and logged in"
				});
			}
		}
	} catch (err) {
		if (err) {
			res.status(500).json({
				status: 0,
				msg: errorMassage.serverError
			});
		}
	}
};
exports.totaluser = async (req, res) => {
	try {
		const user = await User.find().populate("user_role");
		if (user) {
			res.status(200).send({
				status: 1,
				data: user
			});
		}
	} catch (err) {
		if (err) {
			res.status(500).json({
				status: 0,
				msg: errorMassage.serverError
			});
		}
	}
};

exports.remove = async (req, res) => {
	const remove = await User.deleteMany();
	const removerole = await UserRole.deleteMany();
	if (remove) {
		res.status(200).send({
			status: 1,
			msg: "Remove all data"
		});
	}
};
