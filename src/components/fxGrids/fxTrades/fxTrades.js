import React from "react";
import DataGrid, { valueCellContentRenderer } from "react-data-grid";
import { connect } from "react-redux";
import classes from "./fxTrades.module.css";
import "../../grids/grid.css";

const defaultColumnProperties = {
  resizable: true,
  width: 100,
};

const onWidthChanged = () => {
  window.dispatchEvent(new Event("resize"));
};

const columns = [
  { key: "id", name: "TRADE ID" },
  { key: "status", name: "STATUS" },
  { key: "date", name: "TRADE DATE" },
  { key: "direction", name: "DIRECTION" },
  { key: "ccyccy", name: "CCYCCY" },
  { key: "dealtCcy", name: "DEALT CCY" },
  { key: "notional", name: "NOTIONAL" },
  { key: "rate", name: "RATE" },
  { key: "valueDate", name: "VALUE DATE" },
  { key: "trader", name: "TRADER" },
].map((c) => ({ ...c, ...defaultColumnProperties }));

const FXTrades = (props) => {
  const rows = props.trades.map((trade) => {
    const {
      id,
      status,
      date,
      direction,
      ccyccy,
      dealtCcy,
      notional,
      rate,
      valueDate,
      trader,
    } = trade;

    return {
      id,
      status,
      date,
      direction,
      ccyccy,
      dealtCcy,
      notional,
      rate,
      valueDate,
      trader,
    };
  });

  return (
    <div className={classes.GridWrapper}>
      <h3>Executed trades</h3>
      <DataGrid
        columns={columns}
        onWidthChanged={onWidthChanged}
        rowGetter={(i) => rows[i]}
        rowsCount={rows.length}
        rowHeight={27}
        minHeight={50}
        defaultCellContentRenderer={valueCellContentRenderer}
      ></DataGrid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    trades: state.trades,
  };
};

export default connect(mapStateToProps)(FXTrades);
