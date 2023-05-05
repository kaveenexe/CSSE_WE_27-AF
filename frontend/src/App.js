import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import LoyaltyDB from './pages/loyalty/loyaltydb'
import TravelPlan from './pages/travel-plan/travel_plan';
import MyProfile from './pages/package/MyProfile';
import SinglePackage from './pages/package/SinglePackage';
import {Context} from './Context';
import Register from './pages/Register';
import Login from './pages/Login';
import Protected from './Protected';
import RoleProtected from './RoleProtected';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Inquiry from './pages/package/Inquiry';

function App() {

  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("rfkey");

  const checkLogin = async () => {
    const user = {
      refreshToken: token,
    };

    const { data: response } = await axios.post(
      "http://localhost:8080/api/refreshToken",
      user
    );
    console.log(response.error);
    if (response.error === false) {
      setStatus(true);
      console.log("setted true");
    } else {
      setStatus(false);
      console.log("setted false");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  // const fetchRole = async () => {
  //   if (status == true) {
  //     try {
  //       const { data: response } = await axios.get(
  //         `http://localhost:8080/api/users/getId/${localStorage.getItem(
  //           "username"
  //         )}`
  //       );
  //       setIsSeller(response.isSeller);
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchRole();
  // }, []);

  const logOut = async () => {
    await fetch("http://localhost:8080/api/refreshToken", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: localStorage.getItem("rfkey"),
      }),
    }).then((res) => {
      if (res.ok) {
        localStorage.setItem("rfkey", "");
        console.log("logged out successfully");
        window.location.reload(false);
        setStatus(false);
        console.log(status);
      } else {
        console.log("Cannot logout");
      }
    });
    localStorage.removeItem("isLogged");
  };

  return (

    <Context.Provider>
      <BrowserRouter>
        <div>
          <Navbar
            setStatus={setStatus}
            status={status}
            logOut={logOut}
          />
          <Routes>

            <Route path="/loyalty-reward" element={<LoyaltyDB />} />
          <Route path="/travel-plan" element={<TravelPlan />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/package/:id" element={<SinglePackage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inquiry" element={<Inquiry />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
