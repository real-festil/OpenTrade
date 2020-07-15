import { handleActions } from "redux-actions";
import { combineReducers } from "redux";

import * as marketWatchActions from "./actions";

const availableIndexes = handleActions(
  {
    [marketWatchActions.getAvailableIndexSuccess](state, action) {
      return action.payload.data;
    },
  },
  []
);

const historicalStock = handleActions(
  {
    [marketWatchActions.getHistoricalStockSuccess](state, action) {
      return action.payload.data;
    },
  },
  []
);

const marketWatchReducer = combineReducers({
  availableIndexes,
  historicalStock,
});

export default marketWatchReducer;
