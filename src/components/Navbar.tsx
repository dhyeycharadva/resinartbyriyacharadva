import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">Resin Art By Riya</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-purple-200 transition">Home</Link>
            <Link to="/catalog" className="hover:text-purple-200 transition">Catalog</Link>
            <Link to="/contact" className="hover:text-purple-200 transition">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-7 h-7 cursor-pointer hover:text-purple-200 transition" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <Menu className="md:hidden w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}