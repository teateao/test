import { Navigate } from "react-router-dom";
import { createContext, useReducer, useContext, useEffect, } from "react";
import { useAuth } from "./Authentication2";

// export const AuthNavigate = () => {
//   const {state} = useAuth()
//   const navigate = useNavigate();
//   if (state !== "login"){
//     navigate("/login");
//     alert("ログインしてください")
//   }
// };
// 認可用のフックを定義
export const useAuthorization = () => {
  const { state } = useAuth();

  return {logged: state.logged, loading: state.logged === undefined};
}


// ログイン確認を行うコンポーネント
const ForbiddenComponent = () => {
  const { logged, loading } = useAuthorization();

  return (
    <>
      {
        loading
          ? <p>loading......</p>
          : !logged && <Navigate to="/login"/>
      }
    </>
  )
}

const MsgContext = createContext(undefined);
const initialState = {
  msg: "まだメッセージはありません",
};
const Msgnavi = () => {
  return(
    <Navigate to="/msg" />
  )
};
const reducer = (state, action) => {
  switch (action.type) {
    case "login_success":
      return {
        ...state,
        msg: "ログインに成功しました",
      };
    case "logout_succsess":
      return {
        ...state,
        msg: "ログアウトしました",
      };
    case "singup_succsess":
      return {
        ...state,
        msg: "アカウントを作成しました",
      };
  }
};
export const MsgProvider = children => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    if (state!=="まだメッセージはありません"){
      return(Msgnavi())
    }
  },[state])
  return (
    <MsgContext.Provider value={{ state, dispatch }}>
      {children}
    </MsgContext.Provider>
  );
};
export const useMsg = () => {
  const context = useContext(MsgContext);
  return context;
};
