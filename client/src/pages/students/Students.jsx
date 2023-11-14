import React, { useEffect, useState } from "react";

import TableRow from "../../components/tableRow/TableRow";
import { getStudents, deleteStudent, deleteStudents } from "../../utils/api";
import "./style.scss";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    getStudentsFromDB();
  }, []);

  const getStudentsFromDB = async () => {
    const data = await getStudents();
    // console.log("data: ", data.data);
    setStudents(data.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    await getStudentsFromDB();
  };

  const handleDeleteBtnClick = async () => {
    if (selectedIds.length != 0) {
      await deleteStudents(selectedIds);
      await getStudentsFromDB();
      setSelectedIds([]);
    } else {
      alert("not selected anything");
    }
  };

  console.log("students: ", students);
  console.log("selected ids: ", selectedIds)

  return (
    <div className="students">
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Full Name</th>
            <th>Roll Number</th>
            <th>Course Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <TableRow
                key={student._id}
                {...student}
                handleDelete={handleDelete}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={handleDeleteBtnClick}>Delete</button>
    </div>
  );
};

export default Students;
