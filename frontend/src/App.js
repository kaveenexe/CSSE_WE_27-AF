import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import { Context } from "./Context";
import Home from "./pages/home.jsx";

function App() {
  return (
    // <div className="App">
    //   hello world
    // </div>
     <Context.Provider>
     <BrowserRouter>
     <div>
       <Routes>
         <Route path="/" element={<Home />} />
       </Routes>

     </div>
     </BrowserRouter>
   </Context.Provider>
 
  );
}

export default App;
