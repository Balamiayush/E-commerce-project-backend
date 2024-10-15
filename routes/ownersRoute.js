const express = require("express");
const ownerModels = require("../models/owner-models");

const router = express.Router();

if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    let owner = await ownerModels.find();
    if (owner.length > 0) {
      return res.status(400).json({ error: "you dont have permission " });
    }
    let { fullname, email, password } = req.body;
    let createOwner = await ownerModels.create({
      fullname,
      email,
      password,
    });
    res.send(createOwner);
  });
}
router.get("/", (req, res) => {
  console.log("hello its worinkg ");
});
console.log(process.env.NODE_ENV);
module.exports = router;
