import * as React from "react";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  Typography,
} from "@mui/material";
import { urls } from "../date/Urls";
import { fetchPost } from "../components/fetch";
import { useMsg } from "../components/Navigate";
import { useAuth } from "../components/Authentication2";

export const Signup = () => {
  // const {dispatch} = useMsg()
  const {state,dispatch } = useMsg()
  console.log(state)
  const [form, setForm] = React.useState({
    pass1: "",
    pass2: "",
    email: "",
    name: "",
  });
  const [pass_err, setPass_err] = React.useState(false);
  const changeHandoler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [show, setShow] = React.useState(true);
  const submitHandoler = async () => {
    if (
      form.pass1 === form.pass2 &&
      form.pass1 !== "" &&
      form.name !== "" &&
      form.email !== ""
    ) {
      const user = {
        username: form.name,
        email: form.email,
        password: form.pass1,
      };
      fetchPost({ url: urls.createuser, body: user })
      .then(dispatch({type:"singup_succsess"}))
    } else {
      setPass_err(true);
    }
  };
  const passwordShowHandoeler = () => {
    setShow(prev => !prev);
  };
  return (
    <Box>
      <Typography variant="h2">ここはサインアップ</Typography>
      <form>
        <InputLabel htmlFor="my-email_name">ユーザー名</InputLabel>
        <Input id="my-email_name" name="name" onChange={changeHandoler} />

        <InputLabel htmlFor="my-email_signup">メールアドレス</InputLabel>
        <Input id="my-email_signup" name="email" onChange={changeHandoler} />

        <InputLabel htmlFor="pass1_signup">パスワード</InputLabel>
        <Input
          id="pass1_signup"
          name="pass1"
          onChange={changeHandoler}
          type={show ? "password" : "text"}
        />

        <InputLabel htmlFor="pass2_singup">確認パスワード</InputLabel>
        <Input
          id="pass2_singup"
          name="pass2"
          onChange={changeHandoler}
          type={show ? "password" : "text"}
        />
        {pass_err && <Box>パスワードが一致しません</Box>}
        <Button onClick={passwordShowHandoeler}>
          パスワードを表示する
        </Button>
        <Button onClick={submitHandoler} variant="contained">
          作成
        </Button>
      </form>
    </Box>
  );
};
