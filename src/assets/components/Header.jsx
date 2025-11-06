import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const { cartItems } = useCart();

  return (
    <header className="bg-teal-500 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white tracking-tight">
          Apparel Shop
        </Link>
        <nav className="flex items-center space-x-6 text-white font-medium">
          <Link to="/" className="hover:text-teal-100 transition-colors">
            Home
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center hover:text-teal-100 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart
            {cartItems.length > 0 && (
              <span className="ml-2 bg-white text-teal-600 text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
