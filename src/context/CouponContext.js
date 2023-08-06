import React, { createContext, useContext, useState } from 'react';

const CouponContext = createContext();

export function useCoupon() {
  return useContext(CouponContext);
}

export function CouponProvider({ children }) {
  const [coupon, setCoupon] = useState([]);

  const addToCoupon = (value) => {
    setCoupon([...coupon, value]);
  };

  return (
    <CouponContext.Provider value={{ coupon, addToCoupon }}>
      {children}
    </CouponContext.Provider>
  );
}
