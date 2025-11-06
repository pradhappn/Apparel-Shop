import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-start">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-100 object-cover rounded-xl shadow"
      />

      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-teal-600 text-xl font-semibold mb-4">₹{product.price}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
