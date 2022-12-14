const express = require("express");
const app = express();
const product = require("./routes/productRoute");
const user = require('./routes/userRoute');
const order = require("./routes/orderRoute")
const payment = require("./routes/paymentRoute")
const errorMiddleware = require('./middleware/error');
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const path = require("path")

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


//ROUTE IMPORTS
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);


app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });

//MIDDLEWARE FOR ERRORS
app.use(errorMiddleware);

module.exports = app;