import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow hover:shadow-lg transition-all bg-white flex flex-col">
      <img
        src={new URL(product.image, import.meta.env.BASE_URL).href}
        alt={product.name}
        className="w-full h-100 object-cover rounded-xl mb-4"
      />
      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-800 truncate">{product.name}</h2>
        <p className="text-teal-600 text-md font-semibold mt-1">₹{product.price}</p>
      </div>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block text-center px-4 py-2 bg-teal-600 text-white text-sm font-medium rounded-xl hover:bg-teal-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
