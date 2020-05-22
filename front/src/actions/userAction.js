/*
export const add = todo => ({
  type: "ADD",
  payload: todo
});

export const remove = id => ({
  type: "REMOVE",
  payload: id
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  payload: id
});

export const changeView = type => ({
  type: "CHANGE_VIEW",
  payload: type
});
*/

export const login = (_email, _password) => ({
  type: "LOGIN",
  payload: {
    email: _email,
    password: _password
  }
})