import React from 'react';
import { studentData } from '../data/studentData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

function Dashboard() {
  // Aggregate data for overall progress
  const overallProgressData = studentData.map(student => ({
    name: student.name,
    progress: student.progressScores[student.progressScores.length - 1].progress
  }));

  return (
    <div className="">
<div className="text-center font-bold text-5xl p-3 m-10 ">
          <p className=''>Student Dashboard</p>
          <p>2024</p>
          </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Student Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-gray-600">Total Students</p>
            <p className="text-3xl font-bold text-primary">{studentData.length}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Average Progress</p>
            <p className="text-3xl font-bold text-secondary">
              {Math.round(overallProgressData.reduce((sum, student) => sum + student.progress, 0) / overallProgressData.length)}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Cohorts</p>
            <p className="text-3xl font-bold text-accent">
              {[...new Set(studentData.map(s => s.cohort))].length}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Student Progress</h2>
        <BarChart width={500} height={300} data={overallProgressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="progress" fill="#3498db" />
        </BarChart>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;