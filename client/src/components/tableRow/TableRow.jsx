import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RiCheckboxFill } from "react-icons/ri";
import { RiCheckboxBlankLine } from "react-icons/ri";

import "./style.scss";

const TableRow = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  // console.log("props: ", props);

  const handleSelectClick = (id) => {
    if(isSelected == false) {
      props.setSelectedIds([...props.selectedIds, id])
      setIsSelected(true);
    }
    else if(isSelected == true) {
      props.setSelectedIds(props.selectedIds.filter(stuId => stuId != id));
      setIsSelected(false);
    }
  }

  return (
    <>
      <tr className="table-row">
        <td>
          {isSelected ? (
            <RiCheckboxFill onClick={() => handleSelectClick(props._id)} />
          ) : (
            <RiCheckboxBlankLine onClick={() => handleSelectClick(props._id)} />
          )}
        </td>
        <td>{props.fullName}</td>
        <td>{props.rollNumber}</td>
        <td>{props.courseName}</td>
        <td>{props.mobileNumber}</td>
        <td>{props.email}</td>
        <td>
          <Link to={`/editStudent/${props._id}`}>
            <FaEdit style={{ cursor: "pointer" }} />
          </Link>
          <RiDeleteBin6Fill
            onClick={() => props.handleDelete(props._id)}
            style={{ cursor: "pointer" }}
          />
        </td>
      </tr>
    </>
  );
};

export default TableRow;
