import React from 'react';

const students = [
  { id: 1, name: "Sübhan Əlisgar", studentId: "#2123123", status: "İştirak edir" },
  { id: 2, name: "Niyaz Hüseynov", studentId: "#2123123", status: "İştirak edir" },
  { id: 3, name: "Kamran Mahmudov", studentId: "#2123123", status: "İştirak etmir" },
];

const AttendanceTable = () => {
  return (
    <div className="w-full shadow-lg rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-2 w-10">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th scope="col" className="px-3 py-2 w-10">
                #
              </th>
              <th scope="col" className="px-6 py-2 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Tələbə adı
              </th>
              <th scope="col" className="px-6 py-2 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Tələbə ID
              </th>
              <th scope="col" className="px-6 py-2 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-3 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{student.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{student.studentId}</td>
                <td
                  className={`px-6 py-4 text-sm whitespace-nowrap ${
                    student.status === "İştirak edir" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {student.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;