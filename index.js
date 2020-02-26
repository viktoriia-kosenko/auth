const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//import Routes
const authRoute = require("./routes/auth");

dotenv.config();

//connect to DB(mongo client constructor)
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

//Middleware
app.use(express.json());

//Routes Middlewares
app.use("/api/user", authRoute);

app.listen(4000, () => console.log("Server is running on port 4000..."));
