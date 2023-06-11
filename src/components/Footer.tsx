import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Posts from "../pages/home/posts/Posts"
import News from "./News"

const Footer = () => {
    const red = (loc: String) => {
        window.location.href = `/products/?type=${loc}`
    }
    return(

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
                            <Typography variant="h3">ხეთა</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack
                                sx={{ marginTop: { xs: "20px", md: "0" } }}
                                direction='column' gap={'20px'} alignItems={"flex-start"}>
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
                                        onClick={() => red('all')}
                                        to={'/products?type=all'}>პროდუქცია</Link>
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack
                                sx={{ marginTop: { xs: "20px", md: "0" } }}
                                direction='column' gap={'20px'} alignItems={"flex-start"}>
                                <Link to={'/'}>555 23 41 68</Link>
                                <Link to={'/about'}>gioj715@gmail.com</Link>
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