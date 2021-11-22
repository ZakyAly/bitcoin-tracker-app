import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThemeProvider, CircularProgress } from "@material-ui/core";

import { Line } from "react-chartjs-2";

import SelectButton from "../SelectButton/SelectButton";

import { CryptoState } from "../../CryptoContext";
import { HistoricalChart } from "../../config/api";
import { chartDays } from "../../config/chartDays";

import { useStyles, darkTheme } from "./styles.js";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const classes = useStyles();

  const fetchHistoricalData = async () => {
    try {
      const { data } = await axios.get(
        HistoricalChart(coin.id, days, currency)
      );

      setHistoricData(data.prices);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHistoricalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, days]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours() - 12}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "yellow",
                    borderWidth: ".7",
                    hoverBorderColor: "red",
                    textStrokeColor: "white",
                  },
                ],
              }}
            />
            <div>
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
