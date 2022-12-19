import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
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
  const changeBasenumHandoler = e => {
    setBaseNum({
      ...basenum,
      [e.target.name]: e.target.value,
    });
    console.log("これはuseState内")
    console.log(basenum)
  };
  const changeKotainumHandoler = e => {
    setKotaiNum({
      ...kotainum,
      [e.target.value]: e.target.value,
    });
  };
  const changeDoryokunumHandoler = e => {
    setDoryokuNum({
      ...doryokunum,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    console.log("useEffect動いてる");
    // let e_obj = 0;
    // console.log(e_obj);
    // suuti.map(prev => {
    //   console.log(prev);
    //   if (prev === "H") {
    //     e_obj += 55;
    //   }
    //   e_obj +=
    //     Math.trunc(
    //       Number(basenum[prev]) +
    //         Number(kotainum[prev]) / 2 +
    //         Number(doryokunum[prev]) / 8
    //     ) + 5;
    //   console.log(basenum[prev] + "　種族値");
    //   console.log(kotainum[prev] + "　個体値");
    //   console.log(doryokunum[prev] + "　努力値");
    //   console.log(e_obj)
    //   setJisuuti({
    //     ...jissuti,
    //     prev: [e_obj],
    //   });
    //   e_obj = 0;
    // });
  }, [doryokunum, basenum, kotainum]);

  return (
    <Grid container spacing={0.5} direction="row">
      <InputLabel htmlFor="name">名前</InputLabel>
      <Input id="name"></Input>
      <Box>種族値</Box>
      <ul>
        {suuti.map((prev, idx) => {
          return (
            <li key={idx}>
              <Grid md={5}>
                <InputLabel htmlFor={prev}>{prev}</InputLabel>
                <Input
                  id={prev}
                  name={prev}
                  onChange={changeBasenumHandoler}
                  type="number"
                  value={basenum[prev]}
                />
              </Grid>
            </li>
          );
        })}
      </ul>
      <Box>個体値</Box>
      <ul>
        {suuti.map((prev, idx) => {
          return (
            <li key={idx}>
              <Grid md={5} direction="row">
                <InputLabel htmlFor={prev}>{prev}</InputLabel>
                <Input
                  id={prev}
                  name={prev}
                  onChange={changeKotainumHandoler}
                  type="number"
                  value={kotainum[prev]}
                />
              </Grid>
            </li>
          );
        })}
      </ul>
      <Box>努力値</Box>
      <ul>
        {suuti.map((prev, idx) => {
          return (
            <li key={idx}>
              <Grid md={5} direction="row">
                <InputLabel htmlFor={prev}>{prev}</InputLabel>
                <Input
                  id={prev}
                  name={prev}
                  onChange={changeDoryokunumHandoler}
                  type="number"
                  value={doryokunum[prev]}
                />
              </Grid>
            </li>
          );
        })}
      </ul>
      <div>
        {suuti.map((prev, idx) => {
          return <div key={idx}>{basenum[prev]}</div>;
        })}
      </div>
      <div>
        {suuti.map((prev, idx) => {
          return <div key={idx}>{kotainum[prev]}</div>;
        })}
      </div>
      <div>
        {suuti.map((prev, idx) => {
          return <div key={idx}>{doryokunum[prev]}</div>;
        })}
      </div>
      <div>
        {suuti.map((prev, idx) => {
          return <div key={idx}>{jissuti[prev]}</div>;
        })}
      </div>
    </Grid>
  );
};
