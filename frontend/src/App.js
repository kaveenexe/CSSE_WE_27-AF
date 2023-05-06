import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoyaltyDB from './pages/loyalty/loyaltydb'
import TravelPlan from './pages/travel-plan/travel_plan';
import MyProfile from './pages/package/MyProfile';
import SinglePackage from './pages/package/SinglePackage';
import Blog from './pages/blogs/blogmain';
import Home from './pages/home';
import TravelPlace from './pages/travelPlaces/places';
import Feedback from './pages/travelPlaces/feedback';
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Context } from "./Context";
import Navbar from "./Navbar";
import Payment from './pages/payment/payment'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("rfkey");
  const [cartFoodLoading, setCartFoodLoading] = useState(true);
  const [cartFoodData, setCartFoodData] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartTotal, setCartTotal] = useState("");
  const [orderData, setOrderData] = useState([]);

  const [isSeller, setIsSeller] = useState();
  const [isCustomer, setIsCustomer] = useState(true);

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



  const fetchRole = async () => {
    if (status == true) {
      try {
        const { data: response } = await axios.get(
          `http://localhost:8080/api/users/getId/${localStorage.getItem(
            "username"
          )}`
        );
        setIsSeller(response.isSeller);
        console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchRole();
  }, []);

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
    <div className="App">
      <BrowserRouter>
      <div>
      <Navbar
      setStatus={setStatus}
      status={status}
      logOut={logOut}
      />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loyalty-reward" element={<LoyaltyDB />} />
          <Route path="/travel-plan" element={<TravelPlan />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/package/:id" element={<SinglePackage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/travel-places" element={<TravelPlace />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;