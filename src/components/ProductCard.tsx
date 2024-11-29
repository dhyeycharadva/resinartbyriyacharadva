import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success('Added to cart!');
  };

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-1">₹{product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 mt-2">{product.description}</p>
          <button 
            onClick={handleAddToCart}
            className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </motion.div>
    </Link>
  );
}