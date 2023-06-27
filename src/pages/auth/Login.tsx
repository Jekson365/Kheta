import { Container, Grid, Input, Stack, styled } from "@mui/material"
import { CustomButton } from "../../Styles"
import { useState, useEffect } from "react"

import axios from "axios"


export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassowrd] = useState("")

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:8080/login",
                { username: username, password: password })
                .then((res) => {
                    const token = res.data.token

                    localStorage.setItem("token", token)
                })
        }
        catch (err) {
            throw err
        }
    }



    return (
        <>
            <Container
                sx={{ 'marginTop': "100px", display: "flex", justifyContent: "center" }}
            >
                <Grid container columns={12}>
                    <form>
                        <Stack direction={'column'}>
                            <CustomInput
                            onChange={(e)=>setUsername(e.target.value)}
                            placeholder="სახელი"></CustomInput>
                            <CustomInput
                            onChange={(e)=>setPassowrd(e.target.value)}
                            placeholder="პაროლი" type="password"></CustomInput>
                            <CustomButton onClick={handleSubmit}>შესვლა</CustomButton>
                        </Stack>
                    </form>
                </Grid>
            </Container>
        </>
    )
}

const CustomInput = styled(Input)({
    border: "1px solid gray",
    borderRadius: "4px",
    padding: "10px 20px",
})

