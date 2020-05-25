
export const mainInitialState = {
  open: false,
}

export const mainReducer = (state, { type, payload }) => {
  switch (type) {
    case "TOOLBAR_TOGGLE":
      return {
        ...state,
        open: !state.open
      };

    default:
      console.log(`No Match MainReducer`)
      break;
  }
}