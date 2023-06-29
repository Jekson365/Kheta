import { Box, Container, Grid, Input, Stack, Typography, styled } from "@mui/material"
import { CustomButton, MainColor } from "../../Styles"
import { useState } from "react"
import Logo from '../../assets/logo.png'

import { instance } from "../../App"


export const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassowrd] = useState("")

    const handleSubmit = async () => {
        try {

            await instance.post("login",
                { username: username, password: password })
                .then((res) => {
                    const token = res.data.token
                    location.href = '/admin'
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

                sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100vh",
                    alignItems: "center",
                    width: "100%",
                }}

            >

                <Stack direction={'column'}
                    maxWidth={"500px"}
                    alignItems={'center'} gap={2} width={"100%"}>
                    <Box width={'200px'}>
                        <img src={Logo}
                            style={{ "width": "100%", height: "100%" }}
                        />
                    </Box>
                    <Typography variant="h6">სისტემაში შესვლა</Typography>
                    <Grid container columns={12}>
                        <form style={{ "width": "100%" }}>
                            <Stack direction={'column'} gap={2}>
                                <CustomInput
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="სახელი"></CustomInput>
                                <CustomInput
                                    onChange={(e) => setPassowrd(e.target.value)}
                                    placeholder="პაროლი" type="password"></CustomInput>
                            </Stack>
                        </form>
                    </Grid>
                    <CustomButton
                        sx={{ "width": "30%", background: MainColor, color: "white", "&:hover": { 'background': MainColor } }}
                        onClick={handleSubmit}>შესვლა</CustomButton>
                </Stack>
            </Container>
        </>
    )

}

const CustomInput = styled(Input)({
    border: "1px solid gray",
    borderRadius: "4px",
    padding: "10px 20px",
})

