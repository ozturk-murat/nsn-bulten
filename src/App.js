import React, { useEffect, useState } from "react";
import axios from "axios";
import { CouponProvider } from "./context/CouponContext";
import Bultein from "./components/Table/Bultein";
import Coupon from "./components/Coupon/Coupon";

const basliklar = [
  "Event count",
  "Yorumlar",
  "",
  "1",
  "X",
  "2",
  "Alt",
  "Üst",
  "H1",
  "1",
  "X",
  "2",
  "H2",
  "1-X",
  "1-2",
  "X-2",
  "Var",
  "Yok",
  "+99",
];

function App({}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.BASE_URL}/bets`)
      .then((response) => {
        const filteredData = response.data.slice(0, 100); // İlk 100 veriyi al
        setData(filteredData);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <CouponProvider>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Bultein basliklar={basliklar} veriler={data} />
        )}

        <Coupon />
      </div>
    </CouponProvider>
  );
}

export default App;
