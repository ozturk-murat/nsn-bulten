import React, { createContext, useContext, useState } from 'react';
import { useBulletin } from './BulletinContext';

const CouponContext = createContext();

export function useCoupon() {
  return useContext(CouponContext);
}

export function CouponProvider({ children }) {

  const { data } = useBulletin();
  console.log("dataCC", data);
  const [coupon, setCoupon] = useState([]);

  const [opCoupon, setOpCoupon] = useState([]);

  const updateCoupon = (value, cellId, objIndex, cellIndex, eventId) => {
    console.log("valıe", eventId);
    const existingCouponItem = coupon.find(item => item.objIndex === objIndex && item.cellIndex === cellIndex);
    
  
    if (existingCouponItem) {
      setCoupon(coupon.filter(item => !(item.cellId === cellId && item.cellIndex === cellIndex)));
    } else {
      setCoupon([...coupon.filter(item => item.objIndex !== objIndex), { value, cellId, objIndex, cellIndex }]);
    }
  };

  return (
    <CouponContext.Provider value={{ coupon, updateCoupon }}>
      {children}
    </CouponContext.Provider>
  );
}




