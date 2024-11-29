import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { useCart } from '../context/CartContext';
import { sendOrderNotification } from '../services/notification';
import { isOnlinePayment } from '../utils/payment';
import type { UserDetails } from '../types/checkout';
import PaymentMethods from '../components/PaymentMethods';
import PaymentQR from '../components/PaymentQR';
import toast from 'react-hot-toast';

export default function Checkout() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [step, setStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentSelect = (methodId: string) => {
    setSelectedPayment(methodId);
    if (!isOnlinePayment(methodId)) {
      setStep(3);
    } else {
      setStep(2);
    }
  };

  const handlePaymentConfirm = () => {
    setStep(3);
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const notificationSent = await sendOrderNotification({
        userDetails,
        items: state.items,
        total: state.total,
        paymentMethod: selectedPayment
      });

      if (!notificationSent) {
        toast.error('There was an issue processing your order. Please try again.');
        setIsProcessing(false);
        return;
      }

      setShowSuccess(true);
      setTimeout(() => {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/');
      }, 3000);
    } catch (error) {
      toast.error('Failed to process your order. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Checkout</h2>
              <p className="text-purple-600 font-semibold">Total: ₹{state.total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className={`h-1 flex-1 ${step >= 1 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
              <div className={`h-1 flex-1 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
              <div className={`h-1 flex-1 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <PaymentMethods
                selectedPayment={selectedPayment}
                onSelect={handlePaymentSelect}
              />
            )}

            {step === 2 && (
              <PaymentQR onConfirm={handlePaymentConfirm} />
            )}

            {step === 3 && (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleDetailsSubmit}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold mb-4">Delivery Details</h3>
                <div className="grid gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={userDetails.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Delivery Address</label>
                    <textarea
                      name="address"
                      required
                      value={userDetails.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={userDetails.city}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">PIN Code</label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        value={userDetails.pincode}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full bg-purple-600 text-white py-3 px-4 rounded-lg text-lg font-semibold transition transform hover:scale-105 ${
                    isProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:bg-purple-700'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'PLACE ORDER'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Dialog
        open={showSuccess}
        onClose={() => {}}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white rounded-xl p-8 max-w-md mx-auto text-center shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <Dialog.Title className="text-2xl font-bold text-gray-900 mb-2">
              Thanks for your order!
            </Dialog.Title>
            <p className="text-gray-600">Your order has been placed successfully.</p>
          </motion.div>
        </div>
      </Dialog>
    </div>
  );
}