import { takeLeading, put, call } from "redux-saga/effects";

import { getAvailableIndex, getHistoricalStock } from "./actions";
import API from "../../utils/api";

function* getAvailableIndexFlow() {
  try {
    const indexes = API.get("available-indexes");
    yield put(getAvailableIndex.success(indexes));
  } catch (e) {
    console.log(e);
  }
}

function* getHistoricalStockFlow() {
  try {
    const historicalStock = API.get("historical-chart/1min/%5EGSPC");
    yield put(getHistoricalStock.success(historicalStock));
  } catch (e) {
    console.log(e);
  }
}

export default [
  takeLeading(getAvailableIndex.request, getAvailableIndexFlow),
  takeLeading(getHistoricalStock.request, getHistoricalStockFlow),
];
