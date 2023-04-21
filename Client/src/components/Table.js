import React, { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const api = "http://localhost:5000/api/user";

const Table = ({ data, setData }) => {
  // get all the data
  async function getData() {
    const response = await axios.get(api);
    //console.log(response.data);
    setData(response.data);
  }

   // delete user
  const deleteData = async (id) => {
    const response = await axios.delete(`http://localhost:5000/api/user/${id}`);
    if (window.confirm("Are you sure you want to delete this record?")) {
      setData(response.data);
      toast.error("recode is deleted", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
     <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>email</th>
            <th>department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0
            ? data?.map((item) => {
                return (
                  <>
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.department}</td>
                      <td>
                        <NavLink to={`/view/${item._id}`}>
                          <button>View</button>
                        </NavLink>
                        <NavLink to={`/edit/${item._id}`}>
                          <button>Edit</button>
                        </NavLink>
                        <button onClick={() =>deleteData(item._id)}>Delete</button>
                      </td>
                    </tr>
                  </>
                );
              })
            : "No record found"}
        </tbody>
      </table>
      <div>
        <NavLink to="/add">
          <button>Add User</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Table;
