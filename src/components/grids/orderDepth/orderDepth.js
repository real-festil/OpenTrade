import React from "react";
import DataGrid, { valueCellContentRenderer } from "react-data-grid";
import { Menu } from "react-data-grid-addons";
import "../grid.css";
import { connect } from "react-redux";

const defaultColumnProperties = {
  resizable: true,
  width: 70,
};

const defaultRowProperties = {
  height: 57,
};

const columns = [
  { key: "Num", name: "#" },
  { key: "Qty", name: "Qty" },
  { key: "Bid", name: "Bid" },
  { key: "Ask", name: "Ask" },
  { key: "Qty2", name: "Qty" },
].map((c) => ({ ...c, ...defaultColumnProperties }));

const rows = [
  {
    Num: "1",
    Qty: "Another Data",
    Bid: "Another Data",
    Ask: "Another Data",
    Qty2: "Another Data",
  },
];

const cell = {
  height: 27,
};

const onWidthChanged = () => {
  window.dispatchEvent(new Event("resize"));
};

const { ContextMenu, MenuItem, SubMenu, ContextMenuTrigger } = Menu;

const ExampleContextMenu = ({
  idx,
  id,
  rowIdx,
  onRowDelete,
  onRowInsertAbove,
  onRowInsertBelow,
}) => {
  return (
    <ContextMenu id={id}>
      <MenuItem data={{ rowIdx, idx }} onClick={onRowDelete}>
        Buy
      </MenuItem>
      <MenuItem data={{ rowIdx, idx }} onClick={onRowInsertAbove}>
        Sell
      </MenuItem>
      <MenuItem data={{ rowIdx, idx }} onClick={onRowInsertBelow}>
        Add to Market Watch
      </MenuItem>
    </ContextMenu>
  );
};

const orderDepth = (props) => {
  return (
    <div
      className={
        props.isDark ? null : props.isBlue ? "BlueTheme" : "WhiteTheme"
      }
      style={{ height: "100%" }}
    >
      <DataGrid
        columns={columns}
        onWidthChanged={onWidthChanged}
        rowGetter={(i) => rows[i]}
        rowsCount={1}
        rowHeight={27}
        minHeight={50}
        defaultCellContentRenderer={valueCellContentRenderer}
        contextMenu={
          <ExampleContextMenu
            onRowDelete={(e, { rowIdx }) => props.openOrder()}
            onRowInsertAbove={(e, { rowIdx }) => props.openOrder()}
            onRowInsertBelow={(e, { rowIdx }) => console.log("sds")}
          />
        }
        RowsContainer={ContextMenuTrigger}
      ></DataGrid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDark: state.theme === "dark" ? true : false,
    isBlue: state.theme === "blue" ? true : false,
  };
};

export default connect(mapStateToProps)(orderDepth);
