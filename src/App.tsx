import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Favorite from './pages/Favorite/Favorite';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import ItemPages from './pages/ItemPages/ItemPages';
import CatalogueHeader from './pages/Catalogue/CatalogueHeader';

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
        <Route path="/catalog/:headerName/:itemId" element={<ItemPages />} />

        {/* test */}
        <Route path="test" element={<CatalogueHeader />} />
      </Routes>
    </div>
  );
}

export default App;
