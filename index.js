const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const app = express();
const db = require("./config/mongodb-connection");
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
const ownersRoute = require('./routes/ownersRoute')
const usersRoute = require('./routes/usersRoute')
const productsRoute  = require('./routes/productsRoute')

app.use('/owners',ownersRoute)
app.use('/users',usersRoute)
app.use('/products',productsRoute)



app
  .listen(port)
  .on("listening", () => console.log(`Server is running on port ${port}`));
