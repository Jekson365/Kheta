import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Posts from "../pages/home/posts/Posts"
import News from "./News"
import { MainColor } from "../Styles"
import MailIcon from '@mui/icons-material/Mail';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const Footer = () => {
    return (

        <>
            <Box
                sx={{ 'width': "100%" }}
                bgcolor={'#fcf8f3'}
                mt={10}
            >
                <News />
                <Container
                    maxWidth={'xl'}
                    sx={{ 'paddingTop': "50px" }}
                >

                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h3" color={MainColor}>ხეთა</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack
                                sx={{ marginTop: { xs: "20px", md: "0" } }}
                                direction='column'
                                color={MainColor}
                                gap={'20px'} alignItems={"flex-start"}>
                                <Typography>
                                    <Link
                                        to={'/'}>მთავარი</Link>
                                </Typography>
                                <Typography>
                                    <Link
                                        to={'/about'}>ჩვენს შესახებ</Link>
                                </Typography>
                                <Typography>
                                    <Link
                                        to={'/products'}>პროდუქცია</Link>
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack
                                color={MainColor}
                                sx={{ marginTop: { xs: "20px", md: "0" } }}
                                direction='column' gap={'20px'} alignItems={"flex-start"}>
                                <Link to={'/'}
                                    style={{ "display": "flex", alignItems: "center", gap: "15px" }}
                                >555 23 41 68
                                    <PhoneEnabledIcon />
                                </Link>
                                <Link
                                    style={{ "display": "flex", alignItems: "center", gap: "15px" }}
                                    to={'/about'}>gioj715@gmail.com
                                    <MailIcon />
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
                <Posts />
            </Box>
        </>
    )
}

export default Footer