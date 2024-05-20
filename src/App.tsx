import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';
import Favorite from './pages/Favorite/Favorite';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import SubHeadersPages from './pages/Catalogue/SeconderyHeader/ThirdHeaderPage';
import MainHeaderPage from './pages/Catalogue/CatalogueHeader/MainHeaderPage';
import ProductsPage from './pages/Catalogue/Products/ProductsPage';
import { selectedItemSelector } from '../redux/PickedItemsSlice/selector';
import { useSelector } from 'react-redux';

function App() {
  const { currentMainHeader, currentSubHeaderItem, currentSecondHeader } =
    useSelector(selectedItemSelector);

  console.log(currentSubHeaderItem, '1');
  console.log(currentMainHeader, '2');
  console.log(currentSecondHeader, '3');

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

        <Route path="/catalog/:headerName/:itemId" element={<MainHeaderPage />} />
        <Route
          path="/catalog/:headerName/:itemId/:headerName/:itemId"
          element={<SubHeadersPages />}
        />
        <Route
          path="/catalog/:headerName/:itemId/:headerName/:itemId/:headerName/:itemId"
          element={<ProductsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
