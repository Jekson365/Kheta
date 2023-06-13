import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { CatButton, MainColor, ShopAllButton } from "../../../Styles"

import ClockImage from '../../../assets/white_clock.jpg'
import { Link } from "react-router-dom"

const Categories = [
    {
        title: "საათები",
        img: ClockImage,
        categ: "clock",
    },
    {
        title: "ღვინის სტენდი",
        categ: "stand",
        img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306077067_155039750488202_4906407192959133235_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=5JuyO5srQlMAX8JwRZT&_nc_oc=AQkHYjvbCBsAB-CccXUJXMD52GnCE4nudfqzT_-YueKa9E8vfrGKzK7EAnVPgUbnsH691aIFweTHchE_N-3iEOvl&_nc_ht=scontent.fkut1-1.fna&oh=00_AfC9lWFtyPFmGJ2ee6nKWf2MTNlLlfK8gzV_pq2KNJ__Yg&oe=64895E21"
    },
    {
        title: "სხვადასხვა",
        categ: "other",
        img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/305627548_155775457081298_202021500415574194_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Bh7z6l0f7voAX8BiZc9&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBw03qQ7UU-6KPuBabueKtUWsTl7SrZayONhiLAc6FXkA&oe=64888CB2"
    }
]


const Category = () => {
    return (
        <>
            <Box
                width={'100%'}
                minHeight={'100vh'}
                bgcolor={MainColor}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{ padding: { xs: "20px", md: "0" } }}
            >

                <Container
                    maxWidth={'xl'}

                >
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography
                            color={"white"}
                            variant="h3" sx={{ fontSize: { xs: "25px", sm: "45px" } }}>
                            კატეგორია
                        </Typography>
                        <Link to={'/products/all'}>
                            <ShopAllButton
                                sx={{ "color": "white", border: "1px solid white" }}
                            >პროდუქცია</ShopAllButton>
                        </Link>
                    </Stack>
                    <Grid container columns={12} spacing={3} mt={4}>
                        {Categories.map((item) => {
                            const { title, img, categ } = item
                            return (
                                <>
                                    <Grid item xs={12} md={4}>
                                        <Box
                                            data-aos='fade-up'
                                            height={'37vw'}
                                            sx={{ height: { xs: "107vw", md: "37vw" }, overflow: "hidden",
                                            boxShadow:"0 0 50px 0.1px rgba(0,0,0,0.2)"
                                        }}
                                            position={'relative'}
                                        >
                                            <img src={img}
                                                className="prod-image"
                                                style={{ "width": "100%", "height": "100%", 'objectFit': "cover" }}
                                            />
                                            <Box
                                                position={'absolute'}
                                                bottom={'20px'}
                                                display={'flex'}
                                                justifyContent={'center'}
                                                width={'100%'}
                                            >
                                                <Link to={`/products/${categ}`} style={{ "width": "100%", textAlign: "center" }}>
                                                    <CatButton
                                                        className="cat-button"
                                                        sx={{ fontSize: "20px" }}
                                                    >
                                                        {title}
                                                    </CatButton>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Category