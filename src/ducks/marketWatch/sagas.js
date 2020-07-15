import { takeLeading, put, call } from "redux-saga/effects";

import * as marketWatchActions from "./actions";
import API from "../../utils/api";

function* getAvailableIndexFlow(action) {
  console.log("111111111111111");
  try {
    const indexes = API.get("available-indexes");
    yield put(marketWatchActions.getAvailableIndexSuccess(indexes));
  } catch (e) {
    console.log(e);
  }
}

function* getHistoricalStockFlow(action) {
  try {
    const historicalStock = API.get("historical-chart/1min/%5EGSPC");
    yield put(marketWatchActions.getHistoricalStockSuccess(historicalStock));
  } catch (e) {
    console.log(e);
  }
}

export default [
  takeLeading(
    marketWatchActions.getAvailableIndexRequest,
    getAvailableIndexFlow
  ),
  takeLeading(
    marketWatchActions.getHistoricalStockRequest,
    getHistoricalStockFlow
  ),
];
