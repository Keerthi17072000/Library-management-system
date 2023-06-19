import { useState, useEffect } from "react";
import DynamicTable from "./dynamic";
import AddData from "./AddData";
import EditData from "./EditData";

function Booktable() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ BookID: null, BookName: "", Category: "", Price: "" });

  useEffect(() => {
    const jsonData = [
      {
        BookID: "1",
        BookName: "Computer Architecture",
        Category: "Computers",
        Price: "125.60"
      },
      {
        BookID: "2",
        BookName: "Asp.Net 4 Blue Book",
        Category: "Programming",
        Price: "56.00"
      },
      {
        BookID: "3",
        BookName: "Popular Science",
        Category: "Science",
        Price: "210.40"
      }
    ];

    setData(jsonData);
  }, []);

  const addUser = (user) => {
    user.BookID = (data.length + 1).toString();
    setData([...data, user]);
  };

  const deleteUser = (id) => {
    setData(data.filter((user) => user.BookID !== id));
    setEditing(false);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ ...user });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setData(data.map((user) => (user.BookID === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>Library Management Portal</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2 className="mt-5">Edit Book</h2>
              <EditData setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div className="mt-5">
              <h2>Add Book</h2>
              <AddData addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large mt-5">
          <h2>View Books</h2>
          <DynamicTable editRow={editRow} deleteUser={deleteUser} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Booktable;
