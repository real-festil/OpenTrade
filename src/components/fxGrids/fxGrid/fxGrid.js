import React, { useState } from "react";
import FXCard from "../fxCard/fxCard.js";
import classes from "./fxGrid.module.css";

const FXGrid = () => {
  const [filter, toggleFilter] = useState("ALL");

  const cards = [
    { label: "EUR/USD", income: "EUR", outcome: "USD", min: 59, max: 64 },
    { label: "USD/JPY", income: "USD", outcome: "JPY", min: 19, max: 30 },
    { label: "GPB/JPY", income: "GPB", outcome: "JPY", min: 19, max: 30 },
    { label: "GPB/USD", income: "GPB", outcome: "USD", min: 19, max: 30 },
    { label: "EUR/JPY", income: "EUR", outcome: "JPY", min: 19, max: 30 },
    { label: "AUD/USD", income: "AUD", outcome: "USD", min: 19, max: 30 },
    { label: "EUR/CAD", income: "EUR", outcome: "CAD", min: 19, max: 30 },
    { label: "NZD/USD", income: "NZD", outcome: "USD", min: 19, max: 30 },
    { label: "EUR/AUD", income: "EUR", outcome: "AUD", min: 19, max: 30 },
  ];

  const onToggleFilter = (filter) => {
    toggleFilter(filter);
  };

  return (
    <div>
      <div className={classes.Filters}>
        <b>Live Rates</b>
        <ul>
          <li onClick={() => onToggleFilter("ALL")}>All</li>
          <li onClick={() => onToggleFilter("EUR")}>EUR</li>
          <li onClick={() => onToggleFilter("USD")}>USD</li>
          <li onClick={() => onToggleFilter("GPB")}>GPB</li>
          <li onClick={() => onToggleFilter("AUD")}>AUD</li>
          <li onClick={() => onToggleFilter("NZD")}>NZD</li>
        </ul>
      </div>
      <div className={classes.Grid}>
        {cards.map((card) => {
          if (filter !== "ALL") {
            if (card.income === filter) {
              return (
                <FXCard
                  key={card.label}
                  label={card.label}
                  income={card.income}
                  outcome={card.outcome}
                  min={card.min}
                  max={card.max}
                />
              );
            }
          } else
            return (
              <FXCard
                key={card.label}
                label={card.label}
                income={card.income}
                outcome={card.outcome}
                min={card.min}
                max={card.max}
              />
            );
        })}
      </div>
    </div>
  );
};

export default FXGrid;
