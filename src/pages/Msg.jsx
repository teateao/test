import { Box,Typography } from "@mui/material";
import { useMsg } from "../components/Navigate";
export const Msgpage = ()=>{
    const {state} = useMsg()
    return(
        <Typography variant="h2">{state.msg}</Typography>
    )
}
