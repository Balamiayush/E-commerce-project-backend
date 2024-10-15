const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const app = express();
const db = require("./config/mongodb-connection");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const ownersRoute = require("./routes/ownersRoute");
const usersRoute = require("./routes/usersRoute");
const productsRoute = require("./routes/productsRoute");

const PORT = process.env.PORT || 3000;

app.use("/owners", ownersRoute);
app.use("/users", usersRoute);
app.use("/products", productsRoute);

// Start server and log when it's ready
app.get('/',(req,res)=>{
  res.send('hello world')
  console.log('Server started...')
})

// If you want to add additional event listeners, use the server object
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});