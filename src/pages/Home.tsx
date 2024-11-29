import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Star, Truck, Shield, Package, Clock, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { products } from '../data/products';

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen relative bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105176677c?w=1800&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
             Welocome to the online store  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                Resin Art By Riya Charadva
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl">Handmade Resin Art made with love and care</p>
            <div className="flex gap-4">
              <Link 
                to="/catalog"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition transform hover:scale-105"
              >
                Shop Now <ArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition"
            >
              <Truck className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free worldwide shipping on all orders over Rs.50</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition"
            >
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Protected by industry-leading encryption</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition"
            >
              <Package className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Curated selection of top-tier products</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition"
            >
              <Clock className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Featured Products
            </motion.h2>
            <p className="text-gray-600">Discover our most popular items</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Link
                      to="/catalog"
                      className="bg-white text-purple-600 px-6 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-purple-600 font-bold mt-2">₹{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition transform hover:scale-105"
            >
              View All Products <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              Why Choose Us
            </motion.h2>
            <p className="text-purple-200">Experience shopping like never before</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-purple-200">Only the finest products make it to our store</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-purple-200">Your satisfaction is our top priority</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-center"
            >
              <Star className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
              <p className="text-purple-200">Rated excellent by our customers</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter for exclusive offers and updates</p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:ring-purple-500 outline-none"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}