const validetor = require("validator");
const errorMassage = require("../message/errormessage");
const uservelidetor = (req, res, next) => {
	try {
		const phonenoreg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		const passwordreg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
		const { name, email, phone, userName, password } = req.body;
		if (name == "") {
			res.json({
				statu: 0,
				msg: "Please enter your name"
			});
		} else if (email == "") {
			res.json({
				statu: 0,
				msg: "Please enter your email"
			});
		} else if (validetor.isEmail(email) === false) {
			res.json({
				statu: 0,
				msg:
					"Please enter your email address in format: yourname@example.com"
			});
		} else if (phone == "") {
			res.json({
				statu: 0,
				msg: "Please enter your phone number"
			});
		} else if (phonenoreg.test(phone) === false) {
			res.json({
				statu: 0,
				msg: "Please enter your phone number in format: xxx-xxx-xxxx"
			});
		} else if (userName == "") {
			res.json({
				statu: 0,
				msg: "Please enter your username"
			});
		} else if (password == "") {
			res.json({
				statu: 0,
				msg: "Please enter your password"
			});
		} else if (passwordreg.test(password) === false) {
			res.json({
				statu: 0,
				msg:
					"Please enter a valid Password. Password should be between 6 to 16 characters and must contain min 1 alphabet, 1 number, 1 special character."
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
const verifymiddleware = {};
verifymiddleware.uservelidetor = uservelidetor;
module.exports = verifymiddleware;
