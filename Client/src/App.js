import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./components/View";
import Edit from "./components/Edit";
function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table data={data} setData={setData} />} />
          <Route
            path="/add"
            element={
              <AddUser
                data={data}
                setData={setData}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                department={department}
                setDepartment={setDepartment}
              />
            }
          />
          <Route path="/view/:id" element={<View />} />
          <Route
            path="/edit/:id"
            element={
              <Edit
                data={data}
                setData={setData}
               
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
