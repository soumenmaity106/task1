const User = require("./user.model");
const errorMassage = require("../message/errormessage");
const emailorPhoneverification = async (req, res, next) => {
	try {
		const { email, phone, userName } = req.body;
		const emailverification = await User.findOne({ email: email });
		const phoneverification = await User.findOne({ phone: phone });
		const userNamevalidetor = await User.findOne({ userName: userName });
		if (emailverification) {
			res.json({
				statu: 0,
				msg: `${email} this email already exists`
			});
		} else if (phoneverification) {
			res.json({
				statu: 0,
				msg: `${phone} this phonenumber already exists`
			});
		} else if (userNamevalidetor) {
			res.json({
				statu: 0,
				msg: `${userName} this username already exists`
			});
		} else {
			next();
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({
			statu: 0,
			msg: errorMassage.serverError
		});
	}
};
const sendvelidetor = {};
sendvelidetor.emailorPhoneverification = emailorPhoneverification;
module.exports = sendvelidetor;
