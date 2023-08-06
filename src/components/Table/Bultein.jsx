import React, { useState } from "react";
import styles from "./bultein.module.scss";
import { useCoupon } from "../../context/CouponContext";

function Bultein({ basliklar, veriler }) {
  const { coupon, addToCoupon, removeCoupon } = useCoupon();
  const [selectedCellId, setSelectedCellId] = useState(null);

  const handleCellClick = (value, cellId) => {
    if (selectedCellId === cellId) {
      removeCoupon(cellId);
      setSelectedCellId(null);
    } else {
      addToCoupon(value, cellId);
      setSelectedCellId(cellId);
    }
  };

  console.table("ver", veriler);
  return (
    <table border={1}>
      <thead>
        <tr className={styles.thead_row}>
          {basliklar.map((baslik, index) => (
            <th key={index}>{baslik}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {veriler.map((obje, index) => (
          <React.Fragment key={index}>
            <tr className={styles.first_row}>
              <td>
                {obje.D}&nbsp;{obje.DAY}&nbsp;{obje.LN}
              </td>
              <td>Yorumlar</td>
              <td>{obje.MBS}</td>
              <td>{obje.OCG[1].OC[0].N}</td>
              <td>{obje.OCG[1].OC[1].N}</td>
              <td>2</td>
              <td>{obje.OCG[5].OC[25].N}</td>
              <td>{obje.OCG[5].OC[26].N}</td>
              <td>H1</td>
              <td>1</td>
              <td>X</td>
              <td>2</td>
              <td>H2</td>
              <td>{obje.OCG[2].OC[3].N}</td>
              <td>{obje.OCG[2].OC[4].N}</td>
              <td>{obje.OCG[2].OC[5].N}</td>
              <td>Var</td>
              <td>Yok</td>
              <td>+99</td>
            </tr>
            <tr className={styles.second_row}>
              <td>
                <b>{obje.C}</b>&nbsp;{obje.T}&nbsp;{obje.N}
              </td>
              <td>Yorumlar</td>
              <td>{obje.OCG[1].MBS}</td>
              <td
                onClick={() => handleCellClick(obje.OCG[1].OC[0].O, obje.ID)}
                className={
                  selectedCellId === obje.ID ? styles.selected_cell : ""
                }
              >
                {obje.OCG[1].OC[0].O}
              </td>
              <td>{obje.OCG[1].OC[1].O}</td>
              <td></td>
              <td>{obje.OCG[5].OC[25].O}</td>
              <td>{obje.OCG[5].OC[26].O}</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>{obje.OCG[2].OC[3].O}</td>
              <td>{obje.OCG[2].OC[4].O}</td>
              <td>{obje.OCG[2].OC[5].O}</td>

              <td></td>
              <td></td>
              <td></td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default Bultein;
