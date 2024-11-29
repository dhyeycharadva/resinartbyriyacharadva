import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Search } from 'lucide-react';

const priceRanges = [
  { id: 1, label: '₹0 - ₹500', min: 0, max: 500 },
  { id: 2, label: '₹501 - ₹1000', min: 501, max: 1000 },
  { id: 3, label: '₹1001 - ₹2000', min: 1001, max: 2000 },
  { id: 4, label: '₹2001 - ₹5000', min: 2001, max: 5000 },
  { id: 5, label: '₹5000+', min: 5000, max: Infinity }
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([]);
  
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const handlePriceRangeChange = (rangeId: number) => {
    setSelectedPriceRanges(prev => 
      prev.includes(rangeId)
        ? prev.filter(id => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(rangeId => {
      const range = priceRanges.find(r => r.id === rangeId);
      return range && product.price >= range.min && product.price <= range.max;
    });

    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-8">Our Products</h1>
        
        {/* Search Bar - Now full width */}
        <div className="relative mb-8 w-full">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-purple-500 outline-none"
          />
          <Search className="absolute left-4 top-3.5 text-purple-500 w-5 h-5" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Price Filter Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <div className="space-y-3">
                {priceRanges.map(range => (
                  <label key={range.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.includes(range.id)}
                      onChange={() => handlePriceRangeChange(range.id)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            {/* Category Filter */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-purple-600 hover:bg-purple-100'
                  } transition`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map(product => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sorry! No product available</h2>
                  <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}