import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast.success('Added to cart!');
  };

  const handleCustomize = () => {
    navigate('/contact');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <motion.div 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="md:flex-1"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              className="p-8 md:flex-1"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-purple-600 mb-6">₹{product.price.toFixed(2)}</p>
              
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={handleCustomize}
                  className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Customize
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Category: {product.category}</li>
                  <li>Handmade with love</li>
                  <li>Custom options available</li>
                  <li>Free shipping on orders over $50</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}