import React from 'react';
import { motion } from 'framer-motion';

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  isOnline: boolean;
}

const paymentMethods: PaymentMethod[] = [
  { id: 'gpay', name: 'Google Pay', icon: '₹', isOnline: true },
  { id: 'phonepay', name: 'PhonePe', icon: '₹', isOnline: true },
  { id: 'cod', name: 'Cash on Delivery', icon: '₹', isOnline: false }
];

interface PaymentMethodsProps {
  selectedPayment: string;
  onSelect: (methodId: string) => void;
}

export default function PaymentMethods({ selectedPayment, onSelect }: PaymentMethodsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>
      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`p-4 border-2 rounded-lg flex items-center justify-between ${
              selectedPayment === method.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300'
            }`}
          >
            <span className="font-medium">{method.name}</span>
            <span className="text-xl">{method.icon}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}