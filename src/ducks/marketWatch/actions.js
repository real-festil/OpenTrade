import { createAction } from "redux-actions";
import API from "../../utils/api";
import { key } from "../../utils/apiKey";

export const getAvailableIndexRequest = createAction(
  "GET_AVAILABLE_INDEX_REQUEST"
);
export const getAvailableIndexSuccess = createAction(
  "GET_AVAILABLE_INDEX_SUCCESS"
);
export const getAvailableIndexFailed = createAction(
  "GET_AVAILABLE_INDEX_FAILED"
);

export const getHistoricalStockRequest = createAction(
  "GET_HISTORICAL_STOCK_REQUEST"
);
export const getHistoricalStockSuccess = createAction(
  "GET_HISTORICAL_STOCK_SUCCESS"
);
export const getHistoricalStockFailed = createAction(
  "GET_HISTORICAL_STOCK_FAILED"
);

export const getAvailableIndex = () => async (dispatch) => {
  dispatch(getAvailableIndexRequest());
  try {
    const res = await API.get(`symbol/available-indexes?apikey=${key}`);
    dispatch(getAvailableIndexSuccess(res));
  } catch (e) {
    console.log("action error:");
    console.log(e);
  }
};

export const getHistoricalStock = () => async (dispatch) => {
  dispatch(getHistoricalStockRequest());
  try {
    const res = await API.get(`historical-chart/1min/%5EGSPC?apikey=${key}`);
    dispatch(getHistoricalStockSuccess(res));
  } catch (e) {
    console.log("action error");
    console.log(e);
  }
};
// export const getAvailableIndex = createAsyncAction(
//   "GET_AVAILABLE_INDEX_REQUEST",
//   "GET_AVAILABLE_INDEX_SUCCESS",
//   "GET_AVAILABLE_INDEX_FAILED"
// )(null);

// export const getHistoricalStock = createAsyncAction(
//   "GET_HISTORICAL_STOCK_REQUEST",
//   "GET_HISTORICAL_STOCK_SUCCESS",
//   "GET_HISTORICAL_STOCK_FAILED"
// )(null);
