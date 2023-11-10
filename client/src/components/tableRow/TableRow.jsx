import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './style.scss';

const TableRow = (props) => {
  // console.log("props: ", props);

  return (
    <>
      <tr className='table-row'>
        <td>{props.fullName}</td>
        <td>{props.rollNumber}</td>
        <td>{props.courseName}</td>
        <td>{props.mobileNumber}</td>
        <td>{props.email}</td>
        <td>
          <Link to={`/editStudent/${props._id}`}>
            <FaEdit style={{cursor: 'pointer'}} />
          </Link>
          <RiDeleteBin6Fill onClick={() => props.handleDelete(props._id)} style={{cursor: 'pointer'}} />
        </td>
      </tr>
    </>
  )
}

export default TableRow