import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box, Typography, Tabs, Tab, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
export const BaseLayout = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <ThemeProvider>
    <Box>
      <Box component="header">
        <Box>
          <nav>
              <Grid container spacing={1}>
            <Link to="/login">ログイン</Link>
            <Link to="/">ホーム</Link>
            <Link to="/mypage">マイページ</Link>
              </Grid>
          </nav>
        </Box>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
    // </ThemeProvider>
  );
};
