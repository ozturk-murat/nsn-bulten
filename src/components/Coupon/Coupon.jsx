import React from "react";
import { useCoupon } from "../../context/CouponContext";
import styles from "./coupon.module.scss";

function Coupon() {
  const { coupon, selectedCouponData} =
    useCoupon();

  let totalAmount = 0;
  if (coupon.length > 0) {
    totalAmount = coupon.reduce(
      (total, item) => total * parseFloat(item.value),
      1
    );
  }

  return (
    <div className={styles.coupon}>
      {selectedCouponData && (
        <div className={styles.selected_coupon}>
          {selectedCouponData.map((item, index) => (
            <div key={index} className={styles.coupon__coupon_row}>
              <div className={styles.coupon__coupon_row__event}>
                <p>
                  {item.OCG.MBS}
                  &nbsp;KOD: {item.C}&nbsp;MAÇ:&nbsp;
                  {item.N}&nbsp;
                  <b>Oran:{item.OCG.O}</b>
                </p>
              </div>
              <hr className={styles.coupon__selected_card__divider} />
            </div>
          ))}
        </div>
      )}

      <div className={styles.coupon__total}>
        Toplam Tutar: TL {totalAmount.toFixed(2)}
      </div>
    </div>
  );
}

export default Coupon;
