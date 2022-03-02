import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "swiper/css/bundle";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
// ................Pages............
import Home from "./components/Home/Home";
import Mint from "./components/Mint/Mint";
import SoldOut from "./components/SoldOut/SoldOut";


// ................Pages............End

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/" element={<Mint></Mint>}></Route>
          <Route path="/sold_out" element={<SoldOut></SoldOut>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
