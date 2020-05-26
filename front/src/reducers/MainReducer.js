
import MAIN_CONTENT_STATUS from './../utils/constants';

export const mainInitialState = {
  contentStatus: MAIN_CONTENT_STATUS.DASHBOARD,
  open: false,
}

export const mainReducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_MAIN_CONTENT":
      console.log(`Reducer CHANGE_MAIN_CONTENT`)
      return {
        ...state,
        contentStatus: payload.contentStatus,
      };

    case "TOGGLE_TOOLBAR":
      // case "TOOLBAR_TOGGLE":
      return {
        ...state,
        open: !state.open
      };

    default:
      console.log(`No Match MainReducer`)
      break;
  }
}