# 🧑‍💼 Team Task Manager

A simple React-based Task Management System that allows users to create projects, add tasks, and track progress with role-based access (Admin / Member).

---

## 🚀 Features

- 🔐 User Login & Registration (localStorage based)
- 👤 Role-based Access (Admin / Member)
- 📁 Create Projects
- 📝 Add Tasks inside Projects
- 📊 Task Status Tracking (To Do, In Progress, Done)
- 📈 Progress Display per Project
- 💾 Data stored using localStorage (no backend required)

---

## 🛠️ Tech Stack

- React.js (Frontend)
- JavaScript (Logic)
- CSS (Styling)
- LocalStorage (Data Persistence)

---

## 📂 Project Structure

src/
├── pages/
│ ├── Dashboard.jsx
│ ├── Login.jsx
│ ├── Register.jsx
├── dashboard.css
├── App.jsx


---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/team-task-manager.git

```

2. Navigate to project folder
```
cd team-task-manager
```
3. Install dependencies
```
npm install
```
4. Start the development server
```
npm run dev
```

## 👥 User Roles

🟢 Admin
Create projects
Add tasks
Manage task status

🔵 Member

View projects
View tasks
Track progress

🎯 Future Enhancements

1. Backend integration (Node.js + MongoDB)
2. Task assignment to users
3. otifications system
4. Drag and drop task management
5. Authentication using JWT
