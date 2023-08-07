import React, { useState } from "react";
import styles from "./bultein.module.scss";
import { useCoupon } from "../../context/CouponContext";

function Bulletin({ tabloHead, data }) {
  const { addToCoupon, removeCoupon } = useCoupon();
  const [selectedCellId, setSelectedCellId] = useState(null);
  const [selectedCellIndex, setSelectedCellIndex] = useState(null);

  const handleCellClick = (value, cellId, objIndex, cellIndex) => {
    if (selectedCellId === cellId && selectedCellIndex === cellIndex) {
      console.log("if");
      removeCoupon(cellId, cellIndex);
      setSelectedCellId(null);
      setSelectedCellIndex(null);
    } else {
      console.log("else");
      if (selectedCellId !== null && selectedCellIndex !== null) {
        console.log("else if");
        const obj = data.find((_, index) => index === selectedCellId);
        console.log("obj", obj);
        if (obj) {
          console.log("else if if");
          addToCoupon(value, cellId, objIndex, cellIndex);
        }
      }

      console.log("Func");

      addToCoupon(value, cellId, objIndex, cellIndex);
      setSelectedCellId(objIndex);
      setSelectedCellIndex(cellIndex);
    }
    /* const selectedCell = document.querySelector(
      `[data-cell="${objIndex}-${objIndex}"]`
    );
    if (selectedCell) {
      selectedCell.classList.toggle(styles.second_row__selected_cell);
    } */
  };

  //console.table("ver", data);
  return (
    <table border={1}>
      <thead>
        <tr className={styles.thead_row}>
          {tabloHead.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, objIndex) => (
          <React.Fragment key={objIndex}>
            <tr className={styles.first_row}>
              <td>
                {item.D}&nbsp;{item.DAY}&nbsp;{item.LN}
              </td>
              <td>Yorumlar</td>
              <td>{item.MBS}</td>
              <td>{item.OCG[1].OC[0].N}</td>
              <td>{item.OCG[1].OC[1].N}</td>
              <td>2</td>
              <td>{item.OCG[5].OC[25].N}</td>
              <td>{item.OCG[5].OC[26].N}</td>
              <td>H1</td>
              <td>1</td>
              <td>X</td>
              <td>2</td>
              <td>H2</td>
              <td>{item.OCG[2].OC[3].N}</td>
              <td>{item.OCG[2].OC[4].N}</td>
              <td>{item.OCG[2].OC[5].N}</td>
              <td>Var</td>
              <td>Yok</td>
              <td>+99</td>
            </tr>
            <tr className={styles.second_row}>
              <td>
                <b>{item.C}</b>&nbsp;{item.T}&nbsp;{item.N}
              </td>
              <td>Yorumlar</td>
              <td>{item.OCG[1].MBS}</td>
              <td
                onClick={() =>
                  handleCellClick(item.OCG[1].OC[0].O, item.C, objIndex, 0)
                }
              >
                {item.OCG[1].OC[0].O}
              </td>
              <td
                onClick={() =>
                  handleCellClick(item.OCG[1].OC[1].O, item.C, objIndex, 1)
                }
              >
                {item.OCG[1].OC[1].O}
              </td>
              <td></td>
              <td>{item.OCG[5].OC[25].O}</td>
              <td>{item.OCG[5].OC[26].O}</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>{item.OCG[2].OC[3].O}</td>
              <td>{item.OCG[2].OC[4].O}</td>
              <td>{item.OCG[2].OC[5].O}</td>

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

export default Bulletin;
