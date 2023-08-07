import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const BulletinContext = createContext();

export function useBulletin() {
  return useContext(BulletinContext);
}

export function BulletinProvider({ children }) {
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
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <BulletinContext.Provider value={{ data, loading }}>
      {children}
    </BulletinContext.Provider>
  );
}
