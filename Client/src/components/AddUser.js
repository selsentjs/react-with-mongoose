import React from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const api = "http://localhost:5000/api/user";

const AddUser = ({
  data,
  setData,
  name,
  setName,
  email,
  setEmail,
  department,
  setDepartment,
}) => {
  // navigate
  const navigate = useNavigate();

 
  // button
  const addUser = async () => {
    const response = await axios.post(api, {
        id:uuid(),
        name,
        email,
        department
       
    });
    toast.success("user added successfully", {
        position: toast.POSITION.TOP_CENTER,
    });
   navigate('/');
    setData([...response.data,data]);
    setName("");
    setEmail("");
    setDepartment("");

  };

 
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label for="name" className="name-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />
        <div>
          <label for="email" className="email-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label for="department" className="department-label">
            Department
          </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <br />
        <button onClick={addUser}>Save</button>
      </form>
    </div>
  );
};

export default AddUser;
