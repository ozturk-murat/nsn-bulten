import React, { createContext, useContext, useState } from 'react';

const CouponContext = createContext();

export function useCoupon() {
  return useContext(CouponContext);
}

export function CouponProvider({ children }) {
  const [coupon, setCoupon] = useState([]);

  const addToCoupon = (value, cellId, objIndex, cellIndex) => {
    const existingCouponItem = coupon.find(item => item.objIndex === objIndex);

    console.log("existingCouponItem.cellIndex ", existingCouponItem );
    console.log("objIndex",objIndex);

    if (existingCouponItem && existingCouponItem.cellId === cellId) {
      console.log("girdi");
      setCoupon(coupon.filter(item => item.cellIndex !== existingCouponItem.cellIndex));
    }

    setCoupon([...coupon.filter(item => item.objIndex !== objIndex), { value, cellId, objIndex, cellIndex }]);
  };

  const removeCoupon = (cellId, cellIndex) => {
    setCoupon(coupon.filter(item => !(item.cellId === cellId && item.cellIndex === cellIndex)));
  };

  return (
    <CouponContext.Provider value={{ coupon, addToCoupon, removeCoupon }}>
      {children}
    </CouponContext.Provider>
  );
}




