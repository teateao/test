import * as React from "react";
import { Box, Button, FormControl, InputLabel, Input } from "@mui/material";
export const Signup = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const emailChangeHandler = e => {
    setForm({
      ...form,
      email: e.target.value,
    });
  };
  const [passwords, setPasswords] = React.useState({
    pass1: "",
    pass2: "",
  });
  const passwordChangeHandler = e => {
    const id = e.target.id;
    setPasswords({
      ...passwords,
      [id]: e.target.value,
    });
  };
  React.useEffect(() => {
    if (passwords.pass1 === passwords.pass2) {
      setForm({
        password: passwords.pass1,
      });
    }
  }, [passwords.pass1, passwords.pass2]);

  const submitHandoler = async () => {
    fetch()
  }
  return (
    <Box>
      <Box component="h1">ここはサインアップ</Box>
      <form onSubmit={submitHandoler}>
        <InputLabel htmlFor="my-email">メールアドレス</InputLabel>
        <Input onChange={emailChangeHandler} id="my-email" />

        <InputLabel htmlFor="pass1">パスワード</InputLabel>
        <Input id="pass1" onChange={passwordChangeHandler} />

        <InputLabel htmlFor="pass2">確認パスワード</InputLabel>
        <Input id="pass2" onChange={passwordChangeHandler} />
      <Button variant="contained">ログイン</Button>
      </form>

    </Box>
  );
};
