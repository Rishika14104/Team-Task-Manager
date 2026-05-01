const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if all fields are entered
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      role: "admin"
    });

    await user.save();

    res.status(201).json({ message: "User Registered Successfully" });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: "Registration Failed" });
  }
});


// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Success
    res.json({
      message: "Login Success",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: "Login Error" });
  }
});

module.exports = router;