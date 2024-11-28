import React from 'react';
import { useParams } from 'react-router-dom';
import { studentData } from '../data/StudentData';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

function StudentDetail() {
  const { id } = useParams();
  const student = studentData.find(s => s.id === parseInt(id));

  if (!student) return <div>Student not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{student.name}</h1>
        <div className="space-y-2">
          <p><strong>Cohort:</strong> {student.cohort}</p>
          <div>
            <h2 className="text-xl font-semibold mt-4">attendance</h2>
            {student.attendance.map(attendance => (
              <div key={attendance.name} className="flex justify-between">
                <span>{attendance.name}</span>
                <span className={`font-bold ${
                  attendance.score >= 90 ? 'text-green-600' : 
                  attendance.score >= 80 ? 'text-yellow-600' : 
                  'text-red-600'
                }`}>
                  {attendance.score}%
                </span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-4">Challenging Courses</h2>
            <ul className="list-disc list-inside">
              {student.difficultyCourses.map(course => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Progress Over Time</h2>
        <LineChart width={500} height={300} data={student.progressScores}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="progress" stroke="#3498db" />
        </LineChart>
      </div>
    </div>
  );
}

export default StudentDetail;