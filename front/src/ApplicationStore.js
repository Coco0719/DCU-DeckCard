import React, { createContext, useReducer } from "react";
import { userReducer, userInitialState } from "./reducers/UserReducer";
import { mainReducer, mainInitialState } from "./reducers/MainReducer";
import { deckcardReducer, deckcardInitialState } from "./reducers/DeckCardReducer";
import App from "./App";

export const DeckCardContext = createContext();

const ApplicationStore = (props) => {
  // store 객체를 만들어서 컨텍스트로 하위 컴포넌트들에게 넘겨줌
  // 인자 1 : 생성한 리듀서, 인자 2 : 최초의 상태 값
  //  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [mainState, mainDispatch] = useReducer(mainReducer, mainInitialState);
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const [deckcardState, deckcardDispatch] = useReducer(deckcardReducer, deckcardInitialState);

  return (
    // 결국은 하위 컴포넌트들은 컨텍스트를 이용해 스토어를 가져와서 써야함
    <DeckCardContext.Provider value={{
      userState, userDispatch,
      mainState, mainDispatch,
      deckcardState, deckcardDispatch
    }}>
      <App />
    </DeckCardContext.Provider>
  )
}

export default ApplicationStore;