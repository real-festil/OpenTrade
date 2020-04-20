import React, { useState, useEffect } from "react";
import DataGrid, { valueCellContentRenderer } from "react-data-grid";
import { CSVLink, CSVDownload } from "react-csv";
import { connect } from "react-redux";
import classes from "./fxTrades.module.css";
import "../../grids/grid.css";

const defaultColumnProperties = {
  resizable: true,
  width: "100%",
  sortable: true,
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

const sortRows = (initialRows, sortColumn, sortDirection) => (rows) => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  };
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
};

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

  const [updatedRows, setRows] = useState(rows);

  useEffect(() => {
    setRows(
      props.trades.map((trade) => {
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
      })
    );
  }, [props.trades]);

  return (
    <div className={classes.GridWrapper}>
      <div className={classes.GridHeader}>
        <h3>Executed Trades</h3>
        <button>
          <CSVLink
            data={updatedRows}
            style={{ color: "white", textDecoration: "none" }}
          >
            .CSV
          </CSVLink>
        </button>
      </div>
      <DataGrid
        columns={columns}
        onWidthChanged={onWidthChanged}
        rowGetter={(i) => updatedRows[i]}
        rowsCount={updatedRows.length}
        rowHeight={27}
        minHeight={50}
        onGridSort={(sortColumn, sortDirection) =>
          setRows(sortRows(rows, sortColumn, sortDirection))
        }
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
