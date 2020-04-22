import React, { useState } from "react";
import classes from "./fxPL.module.css";
import { Chart } from "chart.js";
import OrderDepth from "../../grids/orderDepth/orderDepth";
import LastGrid from "../../grids/lastGrid/lastGrid.js";

const options = {
  legend: false,
  animation: false,
  scales: {
    xAxes: [
      {
        display: true,
        type: "time",
        time: {
          displayFormats: {
            quarter: "MMM YYYY",
          },
        },
      },
    ],
    yAxes: [
      {
        display: true,
      },
    ],
  },
};

const FXPL = (props) => {
  let lineChart;
  let updatedData = [];
  let updatedValue;

  const [inputValue, changeInputValue] = useState(100000);

  const updateValue = () => {
    return (updatedValue = (Math.random() * (72 - 28) + 28).toFixed(2));
  };

  const createLineChart = (data) => {
    lineChart = new Chart("PL", {
      type: "line",
      options,
      data: {
        labels: data,
        datasets: [
          {
            label: "TF",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(46, 62, 59, 0.4)",
            borderColor: "#21852f",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data,
          },
        ],
      },
    });
  };

  const interval = setInterval(() => {
    updatedData = updatedData.concat({
      x: new Date(),
      y: updateValue(),
    });
    if (updatedData.length > 10) {
      updatedData.shift();
    }
    lineChart && lineChart.destroy();
    createLineChart(updatedData);
  }, 2000);

  return (
    <div className={classes.PL}>
      <div className={classes.CardGraph}>
        <h3>Profit & Loss</h3>
        <canvas id="PL" height="100" width="250"></canvas>
        <div className={classes.CardGraphInfo}>
          <p>Prev close: 56</p>
          <p>Last: 48</p>
        </div>
      </div>
      <div className={classes.OrderDepth}>
        <h3>Order Depth: 3212 SH</h3>
        <OrderDepth openOrder={() => props.openOrder()} />
      </div>
      <div className={classes.LastGrid}>
        <LastGrid />
      </div>
    </div>
  );
};

export default FXPL;
