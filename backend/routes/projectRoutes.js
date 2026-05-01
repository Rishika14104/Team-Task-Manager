const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Create Project
router.post("/", async (req, res) => {
  try {
    const { name, createdBy } = req.body;

    const project = new Project({ name, createdBy });
    await project.save();

    res.json({ message: "Project Created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating project" });
  }
});

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;