const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorHandler");

//!CONNECTING TO MONGOOSE
mongoose
  .connect(
    ""
  )
  .then(() => console.log("MONGODB connnected successfully"))
  .catch((e) => console.log(e));

//!MIDDLEWARES
app.use(express.json()); //parses incoming json data from user
app.use(errorHandler); //error handler middleware

//!ROUTES
app.use("/", router);

//!START THE SERVER
const PORT = 8000;
app.listen(PORT, console.log(`server is running on PORT: ${PORT}`));
