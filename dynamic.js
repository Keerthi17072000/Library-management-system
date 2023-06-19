import React from "react";
import { Table, Button } from "react-bootstrap";

function DynamicTable({ editRow, deleteUser, data }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key}>{key}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.BookID}>
            {Object.values(user).map((value) => (
              <td key={value}>{value}</td>
            ))}
            <td>
              <Button className="ms-5" variant="primary" onClick={() => editRow(user)}>Edit</Button>
              <Button className="ms-5" variant="danger" onClick={() => deleteUser(user.BookID)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DynamicTable;
