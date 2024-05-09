import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="main_wrapper">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
