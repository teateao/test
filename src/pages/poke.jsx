import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  Grid,
  Stack,
  Paper,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { FetchLoginmixin } from "../components/fetch";
export const Poke = () => {
  const suuti = ["H", "A", "B", "C", "D", "S"];
  const [jissuti, setJisuuti] = React.useState({
    H: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    S: 0,
  });
  const [basenum, setBaseNum] = React.useState({
    H: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    S: 0,
  });
  const [doryokunum, setDoryokuNum] = React.useState({
    H: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    S: 0,
  });
  const [kotainum, setKotaiNum] = React.useState({
    H: 31,
    A: 31,
    B: 31,
    C: 31,
    D: 31,
    S: 31,
  });
  const changeHandoler = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "base":
        setBaseNum(value);
        break;
      case "doryoku":
        setDoryokuNum(value);
        break;
      case "kotai":
        setKotaiNum(value);
        break;
    }
  };

  React.useEffect(() => {
    suuti.map(item => {
      let e_obj = 0;
      if (item === "H") {
        e_obj += 55;
      }
      e_obj +=
        Math.trunc(
          Number(basenum[item]) +
            Number(kotainum[item]) / 2 +
            Number(doryokunum[item]) / 8
        ) + 5;
      setJisuuti(prev => ({
        ...prev,
        [item]: e_obj,
      }));
    });
  }, [doryokunum, basenum, kotainum]);
  const clickHandoler = () => {
    const poke = {
      name: document.getElementById("poke_name"),
      basenum: basenum,
      kotainum: kotainum,
      doryokunum: doryokunum,
      body: document.getElementById("poke_body"),
    };
  };
  const num = ["ステータス", "種族値", "個体値", "努力値", "実数値"];

  return (
    <Box>
      <TextField id="poke_name" />
      <Box container spacing={1} component="ul">
        {num.map((item1, idx1) => {
          <li key={idx1}>
            <Stack direction="row" component="ul">
              <li>{item1}</li>
              {suuti.map((item2, idx2) => (
                <li key={idx2}>
                  <Grid xs={3}>
                    <Input
                      value={item2}
                      // {item1==="ステータス"&&disabled}
                    />
                  </Grid>
                </li>
              ))}
            </Stack>
          </li>;
        })}
      </Box>
      <TextField id="poke_body" />
      <Button onClick={clickHandoler}>保存</Button>
    </Box>
  );
};
