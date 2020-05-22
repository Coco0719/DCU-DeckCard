

export const userInitialState = {
  token: null,
  authenticated: false,
}

//export const todoReducer = (state = initialState, { type, payload }) => {
export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        token: `${payload.email} ${payload.password}`,
        authenticated: true
      }
    default:
      break;
  }
}