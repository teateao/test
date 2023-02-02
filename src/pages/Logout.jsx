import { Typography } from "@mui/material";
import { useEffect,useContext } from "react";
import { AuthenticationContext } from "../components/Authentication2";
export const Logout = () => {
    const logoutHandoler = ()=>{

    }
  return <Typography variant="h2" onClick={logoutHandoler}>ログアウト</Typography>;
};
