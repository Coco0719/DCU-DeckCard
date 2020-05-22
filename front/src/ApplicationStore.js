import React, { createContext, useReducer } from "react";
//import { todoReducer } from "./reducers/TodoReducer"
import { userReducer, userInitialState } from "./reducers/UserReducer"
import App from "./App";



export const DeckCardContext = React.createContext();

const ApplicationStore = (props) => {
  // store 객체를 만들어서 컨텍스트로 하위 컴포넌트들에게 넘겨줌
  // 인자 1 : 생성한 리듀서, 인자 2 : 최초의 상태 값
  //  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);

  return (
    // 결국은 하위 컴포넌트들은 컨텍스트를 이용해 스토어를 가져와서 써야함
    <DeckCardContext.Provider value={{ userState, userDispatch }}>
      <App />
    </DeckCardContext.Provider>
  )
}

export default ApplicationStore;