import { handleActions, createAction } from "redux-actions";

const initialState = {theme: "dark"};

export const changeThemeDark = createAction("CHANGE_THEME_DARK");
export const changeThemeBlue = createAction("CHANGE_THEME_BLUE");
export const changeThemeWhite = createAction("CHANGE_THEME_WHITE");

export default handleActions({
  [changeThemeDark](state) {
    return {theme: "dark"}
  },
  [changeThemeBlue](state) {
   return {theme: "blue"}
  },
  [changeThemeWhite](state) {
  return {theme: "white"}
  }
}, initialState);