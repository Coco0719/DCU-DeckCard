
// 액션 타입 및 액션 생성자 함수
export const login = (_email, _password) => ({ // 액션 생성자 함수
  type: "LOGIN", // 액션 타입
  payload: {
    email: _email,
    password: _password
  }
})