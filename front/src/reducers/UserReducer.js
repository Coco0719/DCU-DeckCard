
export const userInitialState = {
  token: "",
  authenticated: false,
}

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        token: `${payload.email} ${payload.password}`,
        authenticated: true
      }
    default:
      console.log(`No Match UserReducer`)
      break;
  }
}