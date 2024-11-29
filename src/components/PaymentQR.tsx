import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface PaymentQRProps {
  onConfirm: () => void;
}

export default function PaymentQR({ onConfirm }: PaymentQRProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <h3 className="text-xl font-semibold">Scan QR to Pay</h3>
      <div className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto">
        <img
          src="https://i.imgur.com/XNqhY5N.jpg"
          alt="Payment QR Code"
          className="w-full h-auto"
        />
        <p className="mt-4 text-gray-600">UPI ID: riyacharadva@okicici</p>
      </div>
      <button
        onClick={onConfirm}
        className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
      >
        <MessageCircle className="w-5 h-5" />
        Proceed
      </button>
    </motion.div>
  );
}