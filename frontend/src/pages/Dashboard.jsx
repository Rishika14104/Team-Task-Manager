import React, { useState, useEffect } from "react";
import "./dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [taskInputs, setTaskInputs] = useState({});

  // Load user
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedUser);
  }, []);

  // =========================
  // 🟢 ADD PROJECT (FIXED)
  // =========================
  const addProject = () => {
    console.log("Add Project Clicked:", projectName); // DEBUG

    if (projectName.trim() === "") {
      alert("Enter project name"); // ✅ NOW WILL WORK
      return;
    }

    const newProject = {
      id: Date.now(),
      name: projectName,
      tasks: []
    };

    setProjects([...projects, newProject]);
    setProjectName("");
  };

  // =========================
  // 🟢 ADD TASK
  // =========================
  const addTask = (projectId) => {
    const text = taskInputs[projectId];

    if (!text || !text.trim()) {
      alert("Enter task");
      return;
    }

    const updated = projects.map((p) =>
      p.id === projectId
        ? {
            ...p,
            tasks: [
              ...p.tasks,
              {
                id: Date.now(),
                title: text,
                status: "To Do"
              }
            ]
          }
        : p
    );

    setProjects(updated);

    setTaskInputs({
      ...taskInputs,
      [projectId]: ""
    });
  };

  return (
    <div className="container">
      <h1>Team Task Manager</h1>

      {/* USER INFO */}
      <div className="userBox">
        <h3>Welcome {user?.name || "Guest"}</h3>
        <p>You are logged in as: <b>{user?.role || "member"}</b></p>
      </div>

      <hr />

      {/* ================= PROJECT SECTION ================= */}
      <div className="card">
        <h2>Create Project</h2>

        <input
          className="input"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <button className="btn" onClick={addProject}>
          Add Project
        </button>
      </div>

      {/* ================= PROJECT LIST ================= */}
      <h2>Projects</h2>

      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        projects.map((p) => (
          <div className="projectCard" key={p.id}>
            <h3>{p.name}</h3>

            {/* TASK INPUT */}
            <input
              className="input small"
              placeholder="Enter task"
              value={taskInputs[p.id] || ""}
              onChange={(e) =>
                setTaskInputs({
                  ...taskInputs,
                  [p.id]: e.target.value
                })
              }
            />

            <button className="btn smallBtn" onClick={() => addTask(p.id)}>
              Add Task
            </button>

            {/* TASK LIST */}
            {p.tasks.length === 0 ? (
              <p>No tasks yet</p>
            ) : (
              p.tasks.map((t) => (
                <p key={t.id}>
                  {t.title} - {t.status}
                </p>
              ))
            )}
          </div>
        ))
      )}
    </div>
  );
}