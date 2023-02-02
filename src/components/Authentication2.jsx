import { useContext, useReducer, createContext, useEffect } from "react";

// 認証状態を管理するためのコンテキストを作成
const AuthenticationContext = createContext(undefined);

// コンテキストの初期状態
const initialState = {
  logged: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "logout":
      return {
        ...state,
        logged: false,
      };
    case "login":
      return {
        ...state,
        logged: true,
      };
    default:
      throw new Error("reducer undefined action type");
  }
};

export const useAuth = () => {
    const context = useContext(AuthenticationContext);
    return context
  }

export const AuthenticationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
