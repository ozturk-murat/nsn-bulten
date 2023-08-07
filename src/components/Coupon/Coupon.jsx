import React from 'react';
import { useCoupon } from '../../context/CouponContext';
import styles from './coupon.module.scss';

function Coupon() {
  const { coupon } = useCoupon();

  const totalAmount = coupon.reduce((total, item) => total * parseFloat(item.value), 1);

  return (
    <div className={styles.coupon}>
      {coupon.map((item, index) => (
        <div key={index} className={styles.coupon__coupon_row}>
          <div className={styles.coupon__coupon_row__event}>{item.value}</div>
          <hr className={styles.coupon__selected_card__divider} />
        </div>
      ))}
      <div className={styles.coupon__total}>Toplam Tutar: TL {totalAmount.toFixed(2)}</div>
    </div>
  );
}

export default Coupon;