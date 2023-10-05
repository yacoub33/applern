import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";
import AllProducts from "./screens/AllProducts";
import { products } from "./assets/data";
import Cart from "./screens/Cart";
import { useEffect } from "react";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="allproducts"
            element={<AllProducts products={products} />}
          />
          <Route path="product/:id" element={<Product products={products} />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
