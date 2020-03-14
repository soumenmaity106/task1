const controller = require("./controller");
const express = require("express");
const router = express.Router();
const validetor = require("./validetor");
const emailphonevelidetor = require("./emailPhoneVelidetor");
router.post(
	"/register",
	[validetor.uservelidetor],
	[emailphonevelidetor.emailorPhoneverification],
	controller.register
);
router.get("/totaluser", controller.totaluser);
router.delete("/remove", controller.remove);
module.exports = router;
