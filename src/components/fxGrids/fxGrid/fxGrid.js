import React from "react";
import FXCard from "../fxCard/fxCard.js";
import classes from "./fxGrid.module.css";

const FXGrid = () => {
  const cards = [
    { label: "EUR/USD", min: 59, max: 64 },
    { label: "USD/JPY", min: 19, max: 30 },
    { label: "GPB/JPY", min: 19, max: 30 },
    { label: "GPB/USD", min: 19, max: 30 },
    { label: "EUR/JPY", min: 19, max: 30 },
    { label: "AUD/USD", min: 19, max: 30 },
    { label: "EUR/CAD", min: 19, max: 30 },
    { label: "NZD/USD", min: 19, max: 30 },
    { label: "EUR/AUD", min: 19, max: 30 },
  ];

  return (
    <div className={classes.Grid}>
      {cards.map((card) => (
        <FXCard
          key={card.label}
          label={card.label}
          min={card.min}
          max={card.max}
        />
      ))}
    </div>
  );
};

export default FXGrid;
