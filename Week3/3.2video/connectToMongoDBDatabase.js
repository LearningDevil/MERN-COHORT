const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtPassword = "123456";

mongoose.connect("your_mongo_url");

const User = mongoose.model("User", {
  firstname: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

// 1. Signup
app.post("/signup", async (req, res) => {
  const { username, password, firstname } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ msg: "User already exists" });
  }

  const newUser = new User({ firstname, username, password });
  await newUser.save();

  return res.json({ msg: "User created successfully" });
});

// 2. Signin
app.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(403).json({ msg: "Invalid username or password" });
  }

  const token = jwt.sign({ username }, jwtPassword);
  return res.json({ token });
});

// 3. Users
app.get("/users", async (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const users = await User.find({ username: { $ne: username } });
    return res.json({ users });
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});