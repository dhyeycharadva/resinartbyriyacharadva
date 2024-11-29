export const isOnlinePayment = (methodId: string): boolean => {
  return ['gpay', 'phonepay'].includes(methodId);
};