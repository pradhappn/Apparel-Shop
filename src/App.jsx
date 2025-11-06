import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import ProductDetail from "./assets/pages/ProductDetail";
import Cart from "./assets/pages/Cart";
import Checkout from "./assets/pages/Checkout";
import OrderSuccess from "./assets/pages/OrderSuccess";
import { CartProvider } from "./assets/context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router basename="/Apparel-Ecommerce-master">
        <Header />
        <div className="min-h-screen px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<OrderSuccess />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
