import emailjs from '@emailjs/browser';
import { EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_PUBLIC_KEY, isEmailConfigured } from '../config/emailjs';
import type { UserDetails } from '../types/checkout';
import type { CartItem } from '../types/cart';

interface OrderNotification {
  userDetails: UserDetails;
  items: CartItem[];
  total: number;
  paymentMethod: string;
}

export const sendOrderNotification = async (orderData: OrderNotification): Promise<boolean> => {
  if (!isEmailConfigured()) {
    console.warn('EmailJS is not properly configured');
    return false;
  }

  try {
    const orderItems = orderData.items
      .map(item => `${item.name} (${item.quantity}x) - ₹${item.price * item.quantity}`)
      .join('\n');

    const templateParams = {
      to_number: '9099043463',
      message: `A new customer has placed an order!\n\n` +
        `Order Details:\n` +
        `Customer: ${orderData.userDetails.name}\n` +
        `Phone: ${orderData.userDetails.phone}\n` +
        `Email: ${orderData.userDetails.email}\n` +
        `Address: ${orderData.userDetails.address}, ${orderData.userDetails.city} - ${orderData.userDetails.pincode}\n\n` +
        `Items:\n${orderItems}\n\n` +
        `Total: ₹${orderData.total.toFixed(2)}\n` +
        `Payment Method: ${orderData.paymentMethod}`,
    };

    await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams,
      EMAIL_PUBLIC_KEY
    );

    return true;
  } catch (error) {
    console.error('Failed to send notification:', error);
    return false;
  }
};