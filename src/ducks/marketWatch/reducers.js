import { createReducer } from "redux-create-reducer";
import { combineReducers } from "redux";

import { getAvailableIndex, getHistoricalStock } from "./actions";

const availableIndexes = createReducer().handleActions(
  [getAvailableIndex.success],
  (state, action) => action.payload
);

const historicalStock = createReducer().handleActions(
  [getHistoricalStock.success],
  (state, action) => action.payload
);

const marketWatchReducer = combineReducers({
  availableIndexes,
  historicalStock,
});

export default marketWatchReducer;
