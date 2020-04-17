import React, {useState} from "react";
import classes from "./fxCard.module.css";
import { Chart } from "chart.js";
import { Form, Field } from "react-final-form";

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

  const [inputValue, changeInputValue] = useState(100000);

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
  }, 3000);

  const onSubmit= (values) => {
    alert("Operation was successful: " + values);
  }

  return (
    <div className={classes.Card}>
      <div className={classes.CardHeader}>
        <p>{props.label}</p>
        <p>SPT(14APR)</p>
      </div>
      <Form
          onSubmit={onSubmit}
          render={({handleSubmit, values}) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.CardContent}>
                <div className={classes.CardGraph}>
                  <canvas id={props.label} height="120" width="250"></canvas>
                </div>
                <p style={{display: "flex", alignItems: "center", textAlign: "center"}}>2.3</p>
                <div className={classes.CardControl}>
                  <button className={classes.Sell} type="submit" onClick={() => onSubmit(inputValue)}>
                    <div className={classes.CardControlInfo}>
                      <p>SELL</p>
                      <p>1.09</p>
                    </div>
                    <p className={classes.CurrentPrice}>{props.min}</p>
                  </button>
                  <button className={classes.Buy} onClick={() => onSubmit(inputValue)}>
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
                <Field name="EUR">
                  {({input}) => (
                    <input {...input}
                      defaultValue={100000}
                      type="number"
                      value={inputValue}
                      onChange={(e) => {
                        if(e.target.value.length > 10) return null
                        else changeInputValue(e.target.value)
                      }}/>
                  )}
                </Field>
              </div>
            </form>
          )}
        />

    </div>
  );
};

export default FXCard;
