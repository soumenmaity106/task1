const userRouter = require("./users/router");
module.exports = app => {
	app.use("/user", userRouter);
};
