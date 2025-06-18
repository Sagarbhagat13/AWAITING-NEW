
interface CouponData {
  code: string;
  discountPercentage: number;
  isValid: boolean;
  expiryDate?: string;
  description?: string;
  minimumAmount?: number;
}

interface CouponValidationResult {
  isValid: boolean;
  coupon?: CouponData;
  error?: string;
}

// Mock coupon data - replace with real API calls
const mockCoupons: CouponData[] = [
  {
    code: 'SAVE10',
    discountPercentage: 10,
    isValid: true,
    description: '10% off on all trips',
  },
  {
    code: 'WELCOME20',
    discountPercentage: 20,
    isValid: true,
    description: '20% off for new users',
    minimumAmount: 5000,
  },
  {
    code: 'SUMMER15',
    discountPercentage: 15,
    isValid: true,
    description: '15% summer discount',
  },
  {
    code: 'EXPIRED',
    discountPercentage: 25,
    isValid: false,
    description: 'Expired coupon',
  },
];

export const validateCoupon = async (code: string, orderAmount: number): Promise<CouponValidationResult> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const coupon = mockCoupons.find(c => c.code.toUpperCase() === code.toUpperCase());
  
  if (!coupon) {
    return {
      isValid: false,
      error: 'Invalid coupon code'
    };
  }
  
  if (!coupon.isValid) {
    return {
      isValid: false,
      error: 'This coupon has expired'
    };
  }
  
  if (coupon.minimumAmount && orderAmount < coupon.minimumAmount) {
    return {
      isValid: false,
      error: `Minimum order amount of ₹${coupon.minimumAmount.toLocaleString()} required`
    };
  }
  
  return {
    isValid: true,
    coupon
  };
};

export type { CouponData, CouponValidationResult };
