const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dbconfig = require("./app/config/dbconnect");
const fileUpload = require("express-fileupload");

/**============= Expree&cors================= */
const app = express();
const http = require("http").createServer(app);

app.use(cors());
app.use(fileUpload());
app.use("/uploads", express.static("uploads"));
require("dotenv").config();
/** ============ End ==================== */
/** ============ Database Connect ======= */
mongoose.Promise = global.Promise;
mongoose.connect(dbconfig.database, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
	console.log("Connect Mongodb....");
});
/** ============ End ==================== */
/**============== bodyParser ===============  */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/**============== End ===============  */
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

/**========Route============ */
require("./app")(app);

/**========End============ */
/**===============Server Listen=================== */
const port = process.env.PORT || 8080;
http.listen(port, () => {
	console.log(`Server Running Port ${port}`);
});
/**===============End=================== */
