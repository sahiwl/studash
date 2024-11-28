import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import Dashboard from './components/Dashboard';
import Charts from './components/Charts';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <nav className="navbar">
          <div className="container flex justify-between items-center">
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:text-gray-200">Home</Link>
              <Link to="/students" className="hover:text-gray-200">Students</Link>
              <Link to="/charts" className="hover:text-gray-200">Charts</Link>
            </div>
          </div>
        </nav>

        <div className="container mt-8 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
