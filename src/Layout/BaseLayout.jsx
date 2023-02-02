import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ResponsiveAppBar from "./Hedder";
import { CssBaseline, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../components/Authentication2";
export const BaseLayout = () => {
  const { state, dispatch } = useAuth();
  // useEffect(() => {
  //   console.log(state);
  // }, []);
  return (
    <Box>
      <Box component="header">
        {/* <Box component="nav">
          <Link to="/">ホーム</Link>
          {state ? (
          <Link to="/login">ログイン</Link>
            ) : (
              <Link to="/mypage">マイページ</Link>
          )} */}
        {/* </Box> */}
        <ResponsiveAppBar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
