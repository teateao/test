import { urls } from "../date/Urls";
export const fetchPost = async props => {
  const url = props.url;
  const body = JSON.stringify(props.body);
  console.log(body)
  fetch(url, {
    method: "POST",
    body: body,
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(data => {
      data.json();
    })
    .then(res => {
      return res;
    });
};
export const fetchLogin = async () => {
  const url = urls.login;
  const res = fetch(url);
  // const date = await res.json();
  // return await date.logged;
};
