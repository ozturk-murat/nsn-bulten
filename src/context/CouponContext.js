import React, { createContext, useContext, useState } from "react";
import { useBulletin } from "./BulletinContext";

const CouponContext = createContext();

export function useCoupon() {
  return useContext(CouponContext);
}

export function CouponProvider({ children }) {
  const { data } = useBulletin();
  console.log(data.slice(0, 3));
  const [coupon, setCoupon] = useState([]);
  const [selectedCouponData, setSelectedCouponData] = useState([]);

  const updateCoupon = (
    value,
    cellId,
    objIndex,
    cellIndex,
    eventId,
    eventType
  ) => {
    const existingCouponItem = coupon.find(
      (item) => item.objIndex === objIndex && item.cellIndex === cellIndex
    );

    if (existingCouponItem) {
      setCoupon(
        coupon.filter(
          (item) => !(item.cellId === cellId && item.cellIndex === cellIndex)
        )
      );
      const updatedSelectedCouponData = selectedCouponData.filter(
        (item) => item.C !== cellId
      );
      setSelectedCouponData(updatedSelectedCouponData);
    } else {
      setCoupon([
        ...coupon.filter((item) => item.objIndex !== objIndex),
        { value, cellId, objIndex, cellIndex },
      ]);

      const selectedData = data.find(
        (item) =>
          item.OCG[eventId].OC[cellIndex].N === eventType &&
          item.C === cellId &&
          item.objIndex !== objIndex
      );

      if (selectedData) {
        const updatedSelectedCouponData = selectedCouponData.filter(
          (item) => item.C !== cellId && item.objIndex !== objIndex
        );
        setSelectedCouponData([
          ...updatedSelectedCouponData,
          { ...selectedData, OCG: selectedData.OCG[eventId].OC[cellIndex] },
        ]);
      }
    }
  };

  return (
    <CouponContext.Provider
      value={{
        coupon,
        selectedCouponData,
        updateCoupon,
      }}
    >
      {children}
    </CouponContext.Provider>
  );
}
