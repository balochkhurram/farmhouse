import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import Contact from "./pages/Contact";

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} ></Route>
    <Route path="/bookingform" element={<BookingForm/>} ></Route>
    <Route path="/Contact" element={<Contact/>} ></Route>
   </Routes>
 <Footer/>
   </>
  );
}


export default App;
