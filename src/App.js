import { Welcome } from "./components/Welcome";
import { HomePage } from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import { BookedHotels } from "./components/BookedHotels";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
// import LoginTabs from "./components/LoginTabs";
import Logout from "./components/Logout";
import MainPage from "./components/MainPage";
import OnBoarding from "./components/OnBoarding";
import Carousel from "./components/Carousel";
import { productData } from "./components/MockData";

export default function App() {
  return (
    <>
      {/* <LoginTabs /> */}
      {/* <Logout /> */}
      <Welcome />
      {/* <MainPage /> */}
      {/* <Carousel images={productData} /> */}

      {/* <OnBoarding /> */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        <Route path="/hotels" element={<BookedHotels />} />
        <Route path="/reg" element={<Register />} />
      </Routes>
    </>
  );
}
