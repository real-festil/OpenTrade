import { handleActions, createAction } from "redux-actions";

const initialState = { theme: "dark", trades: [] };

export const changeThemeDark = createAction("CHANGE_THEME_DARK");
export const changeThemeBlue = createAction("CHANGE_THEME_BLUE");
export const changeThemeWhite = createAction("CHANGE_THEME_WHITE");

export const addTrade = createAction("ADD_TRADE");

export default handleActions(
  {
    [changeThemeDark](state) {
      return { theme: "dark" };
    },
    [changeThemeBlue](state) {
      return { theme: "blue" };
    },
    [changeThemeWhite](state) {
      return { theme: "white" };
    },
    [addTrade](state, action) {
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
      } = action.payload;

      return {
        ...state,
        trades: [
          ...state.trades,
          {
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
          },
        ],
      };
    },
  },
  initialState
);
