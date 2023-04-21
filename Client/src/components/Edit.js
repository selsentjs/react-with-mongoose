import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
    const [data,setData] = useState([])
 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [department, setDepartment] = useState("")

   // ===========  get single user  ===============================
 
 
    const {id} = useParams();

    // get single user

    useEffect(() => {
        getSingleUser()
    })

    const getSingleUser = async() => {
        const response = await axios.get(`http://localhost:5000/api/user/${id}`)
        console.log(response.data)
        setName(response.data.name);
        setEmail(response.data.email);
        setDepartment(response.data.department)
    
    }

  // ================================================================

  // ==============  update user ================================================
const updateUser = async() => {
    const response = await axios.put(`http://localhost:5000/api/user/${id}`, {
        name,
        email,
        department
    })
   
    setData(response.data)

}
  //======================================================================================
  
 
  return (
    <div>
     
     <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" >
            Name
          </label>
          <input
            type="text"
          id="name"
          name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
           id="email"
           name={email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="department">
            Department
          </label>
          <input
            type="text"
           id="department"
           name={department}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
    <NavLink to='/'><button onClick={updateUser}>update User</button></NavLink>
    </form>
  </div>
       
   
  );
};
export default Edit;
