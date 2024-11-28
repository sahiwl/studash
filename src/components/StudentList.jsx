import React from 'react';
import { Link } from 'react-router-dom';
import { studentData } from '../data/studentData';

function StudentList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Student List</h1>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Cohort</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(student => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{student.id}</td>
              <td className="p-3">{student.name}</td>
              <td className="p-3">{student.cohort}</td>
              <td className="p-3">
                <Link 
                  to={`/students/${student.id}`} 
                  className="text-primary hover:underline"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;