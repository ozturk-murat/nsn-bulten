import React from "react";
import { CouponProvider } from "./context/CouponContext";
import { BulletinProvider } from "./context/BulletinContext";
import Bulletin from "./components/Table/Bulletin";
import Coupon from "./components/Coupon/Coupon";

function App() {
  return (
    <BulletinProvider>
      <CouponProvider>
        <div>
          <Bulletin />
          <Coupon />
        </div>
      </CouponProvider>
    </BulletinProvider>
  );
}

export default App;
