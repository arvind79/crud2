import React, { useEffect, useState } from 'react';

import TableRow from '../../components/tableRow/TableRow';
import { getStudents, deleteStudent } from '../../utils/api';
import './style.scss';


const Students = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudentsFromDB();
  }, [])

  const getStudentsFromDB = async () => {
    const data = await getStudents();
    // console.log("data: ", data.data);
    setStudents(data.data);
  }

  const handleDelete = async (id) => {
    await deleteStudent(id);
    await getStudentsFromDB();
  }

  console.log("students: ", students);

  return (
    <div className='students'>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Roll Number</th>
            <th>Course Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((student) => {
              return (
                <TableRow key={student._id} {...student} handleDelete={handleDelete} />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Students