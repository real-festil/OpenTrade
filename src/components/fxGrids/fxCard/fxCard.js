import React, { useState, useEffect } from "react";
import classes from "./fxCard.module.css";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";

const options = {
  legend: false,
  animation: false,
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: true,
      },
    ],
  },
};

const FXCard = (props) => {
  let lineChart;
  let updatedData = [];
  let updatedValue;

  const updateValue = () => {
    return (updatedValue = (
      Math.random() * (props.max - props.min) +
      props.min
    ).toFixed(2));
  };

  const createLineChart = (data) => {
    lineChart = new Chart(props.label, {
      type: "line",
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
      options,
    });
  };

  const interval = setInterval(() => {
    updatedData = updatedData.concat(updateValue());
    if (updatedData.length > 10) {
      updatedData.shift();
    }
    lineChart && lineChart.destroy();
    createLineChart(updatedData);
  }, 1000);

  return (
    <div className={classes.Card}>
      <div className={classes.CardHeader}>
        <p>{props.label}</p>
        <p>SPT(14APR)</p>
      </div>
      <div className={classes.CardContent}>
        <div className={classes.CardGraph}>
          <canvas id={props.label} height="100"></canvas>
        </div>
        <div className={classes.CardControl}>
          <button className={classes.Sell}>
            <div className={classes.CardControlInfo}>
              <p>SELL</p>
              <p>1.09</p>
            </div>
            <p className={classes.CurrentPrice}>{props.min}</p>
          </button>
          <button className={classes.Buy}>
            <div className={classes.CardControlInfo}>
              <p>BUY</p>
              <p>1.09</p>
            </div>
            <p className={classes.CurrentPrice}>{props.max}</p>
          </button>
        </div>
      </div>
      <div className={classes.CardInput}>
        <p>EUR</p>
        <input defaultValue={100000} type="number"></input>
      </div>
    </div>
  );
};

export default FXCard;
