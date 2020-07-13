import { createAction } from "react-actions";

export const getAvailableIndex = createAction(
  "GET_AVAILABLE_INDEX_REQUEST",
  "GET_AVAILABLE_INDEX_SUCCESS",
  "GET_AVAILABLE_INDEX_FAILED"
)();

export const getHistoricalStock = createAction(
  "GET_HISTORICAL_STOCK_REQUEST",
  "GET_HISTORICAL_STOCK_SUCCESS",
  "GET_HISTORICAL_STOCK_FAILED"
)();
