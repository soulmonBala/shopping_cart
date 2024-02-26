import './App.css';
import Navbar, {} from "./components/Navbar"
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ShopContextProvider } from './Context/shop-context';

function App() {
  return (
    <div className=" App ">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

// bg-gradient-to-r from-cyan-400 to-blue-500
export default App
