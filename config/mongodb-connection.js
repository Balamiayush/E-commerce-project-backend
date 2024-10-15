const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://aryanbalami54:ecom111@ecomm.hqqpx.mongodb.net/?retryWrites=true&w=majority&appName=ecomm"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

module.exports = mongoose.connection;
 