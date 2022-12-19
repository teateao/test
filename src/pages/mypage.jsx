import * as React from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
import { Link } from "react-router-dom";
export const Mypage = () => {
  return (
      <Box>
          <Box component="h2">マイページ</Box>
          <Box></Box>
          <Link to="/poke">新しく作る</Link>
      </Box>

  )
};
