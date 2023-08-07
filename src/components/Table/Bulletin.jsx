import React, { useState } from "react";
import styles from "./bultein.module.scss";
import { useCoupon } from "../../context/CouponContext";
import { useBulletin } from "../../context/BulletinContext";
import theadData from "../../../utils/tHeadData.json";

function Bulletin() {
  const { updateCoupon } = useCoupon();
  const { data, loading } = useBulletin();

  const handleCellClick = (value, cellId, objIndex, cellIndex, eventId, eventType) => {
    updateCoupon(value, cellId, objIndex, cellIndex, eventId, eventType);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border={1}>
          <thead>
            <tr className={styles.thead_row}>
              <th>Event Count: {data.length}</th>
              {theadData.map((item) => (
                <th key={item.id}>{item.label}</th>
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
                      handleCellClick(item.OCG[1].OC[0].O, item.C, objIndex, 0, item.OCG[1].ID, item.OCG[1].OC[0].N)
                    }
                  >
                    {item.OCG[1].OC[0].O}
                  </td>
                  <td
                    onClick={() =>
                      handleCellClick(item.OCG[1].OC[1].O, item.C, objIndex, 1, item.OCG[1].ID, item.OCG[1].OC[1].N)
                    }
                  >
                    {item.OCG[1].OC[1].O}
                  </td>
                  <td></td>
                  <td
                    onClick={() =>
                      handleCellClick(item.OCG[5].OC[25].O, item.C, objIndex, 25, item.OCG[5].ID, item.OCG[5].OC[25].N)
                    }
                  >
                    {item.OCG[5].OC[25].O}
                  </td>
                  <td
                    onClick={() =>
                      handleCellClick(item.OCG[5].OC[26].O, item.C, objIndex, 26, item.OCG[5].ID, item.OCG[5].OC[26].N)
                    }
                  >
                    {item.OCG[5].OC[26].O}
                  </td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td
                    onClick={() =>
                      handleCellClick(item.OCG[2].OC[3].O, item.C, objIndex, 3, item.OCG[2].ID, item.OCG[2].OC[3].N)
                    }
                  >
                    {item.OCG[2].OC[3].O}
                  </td>
                  <td
                    onClick={() =>
                      handleCellClick(item.OCG[2].OC[4].O, item.C, objIndex, 4, item.OCG[2].ID, item.OCG[2].OC[4].N)
                    }
                  >
                    {item.OCG[2].OC[4].O}
                  </td>
                  <td
                    onClick={() =>
                      handleCellClick(item.OCG[2].OC[5].O, item.C, objIndex, 5, item.OCG[2].ID, item.OCG[2].OC[5].N)
                    }
                  >
                    {item.OCG[2].OC[5].O}
                  </td>

                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Bulletin;
