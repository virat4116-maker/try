import "./App.css";

function App() {
  return (
    <div className="dashboard">

      <header className="header">
        <h1>🎓 Student Dashboard</h1>
        <p>Welcome back, virat 👋</p>
      </header>

      <div className="cards">

        <div className="card">
          <h3>📊 GPA</h3>
          <p>3.8</p>
        </div>

        <div className="card">
          <h3>📅 Attendance</h3>
          <p>92%</p>
        </div>

        <div className="card">
          <h3>📚 Assignments</h3>
          <p>5 Pending</p>
        </div>

        <div className="card">
          <h3>🏆 Credits</h3>
          <p>72</p>
        </div>

      </div>

      <div className="sections">

        <div className="box">
          <h2>📌 Upcoming Deadlines</h2>
          <ul>
            <li>DS Assignment - 20 April</li>
            <li>Math Quiz - 22 April</li>
            <li>Project Submission - 25 April</li>
          </ul>
        </div>

        <div className="box">
          <h2>📖 Courses</h2>
          <ul>
            <li>Data Structures</li>
            <li>Operating Systems</li>
            <li>DBMS</li>
            <li>Computer Networks</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default App;