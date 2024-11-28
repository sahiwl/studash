import React from 'react';
import { studentData } from '../data/studentData';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

function Charts() {
  // Aggregate assignment scores across all students
  const assignmentData = studentData.flatMap(student => 
    student.assignments.map(assignment => ({
      name: assignment.name,
      avgScore: studentData.reduce((sum, s) => 
        sum + s.assignments.find(a => a.name === assignment.name).score, 0) / studentData.length
    }))
  ).filter((v, i, a) => a.findIndex(t => t.name === v.name) === i);

  // Overall progress data
  const progressData = studentData[0].progressScores.map(score => ({
    month: score.month,
    avgProgress: studentData.reduce((sum, student) => 
      sum + student.progressScores.find(p => p.month === score.month).progress, 0) / studentData.length
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Average Assignment Scores</h2>
        <BarChart width={500} height={300} data={assignmentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="avgScore" fill="#3498db" />
        </BarChart>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Overall Progress Trend</h2>
        <LineChart width={500} height={300} data={progressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="avgProgress" stroke="#2ecc71" />
        </LineChart>
      </div>
    </div>
  );
}

export default Charts;