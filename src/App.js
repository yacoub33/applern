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
import { useEffect, useState } from "react";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const existingItem = cart.find((product) => product.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === existingItem.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  }

  function changeQuantity(item, quantity) {
    setCart(
      cart.map((product) => {
        if (product.id === item.id) {
          return {
            ...item,
            quantity: +quantity,
          };
        } else {
          return product;
        }
      })
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route
            path="allproducts"
            element={<AllProducts products={products} />}
          />
          <Route
            path="product/:id"
            element={<Product products={products} addToCart={addToCart} />}
          />
          <Route
            path="cart"
            element={<Cart cart={cart} changeQuantity={changeQuantity} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
