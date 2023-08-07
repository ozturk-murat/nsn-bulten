import React, { useEffect, useState } from "react";
import axios from "axios";
import { CouponProvider } from "./context/CouponContext";
import Bulletin from "./components/Table/Bulletin";
import Coupon from "./components/Coupon/Coupon";

const tabloHead = [
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
        const filteredData = response.data.slice(0, 100);
        setData(filteredData);
        setLoading(false);
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
          <Bulletin tabloHead={tabloHead} data={data} />
        )}

        <Coupon />
      </div>
    </CouponProvider>
  );
}

export default App;
