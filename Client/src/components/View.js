import React, {useEffect, useState} from 'react'
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const View = () => {
    const [user, setUser] = useState([]);
    const {id} = useParams();

    // get single user

    useEffect(() => {
        getSingleUser()
    })

    const getSingleUser = async() => {
        const response = await axios.get(`http://localhost:5000/api/user/${id}`)
        setUser(response.data)
    
    }

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.department}</td>
        </tr>
      </tbody>
    </table>
    <NavLink to='/'><button>Go to Home</button></NavLink>
  </div>
  )
}

export default View