import React, { useState } from "react";

import "./style.scss";
import { searchStudent } from "../../utils/api";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResponse, setSearchResponse] = useState([]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchBtnClick = async () => {
    const data = await searchStudent(searchQuery);
    console.log("data", data.data);
    setSearchResponse(data.data);
  };

  return (
    <div className="search-page">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Roll Number"
          onChange={handleChange}
        />
        <button type="button" onClick={handleSearchBtnClick}>
          Search
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Roll Number</th>
            <th>Course Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {searchResponse.map((student) => {
            return (
              <tr key={student._id} className="table-row">
                <td>{student.fullName}</td>
                <td>{student.rollNumber}</td>
                <td>{student.courseName}</td>
                <td>{student.mobileNumber}</td>
                <td>{student.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
