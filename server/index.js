const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const UserModel = require("./models/Users");
app.use(express.json());
// const mongoose = require(mongoose);
mongoose.connect(
  "mongodb+srv://Userformongo:PwuR&b2Skg6et$@cluster0.zbu3itx.mongodb.net/Firstuser?retryWrites=true&w=majority"
);
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});
app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.json(user);
});
app.listen(3001, () => {
  console.log("server runs");
});
