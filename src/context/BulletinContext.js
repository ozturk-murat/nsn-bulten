import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BulletinContext = createContext();

export function useBulletin() {
  return useContext(BulletinContext);
}

export function BulletinProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCells, setSelectedCells] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.BASE_URL}/bets`)
      .then((response) => {
        const filteredData = response.data;
        setData(filteredData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateSelectedCells = (objIndex, cellIndex) => {
    const selectedCellKey = `${objIndex}_${cellIndex}`;
    if (selectedCells.includes(selectedCellKey)) {
      setSelectedCells(selectedCells.filter((key) => key !== selectedCellKey));
    } else {
      const filteredSelectedCells = selectedCells.filter(
        (key) => !key.startsWith(`${objIndex}_`)
      );
      setSelectedCells([...filteredSelectedCells, selectedCellKey]);
    }
  };

  return (
    <BulletinContext.Provider
      value={{ data, loading, selectedCells, updateSelectedCells }}
    >
      {children}
    </BulletinContext.Provider>
  );
}
