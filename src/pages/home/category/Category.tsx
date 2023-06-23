import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { CatButton, MainColor, ShopAllButton } from "../../../Styles"

import ClockImage from '../../../assets/white_clock.jpg'
import OtherImage from '../../../assets/prod_4.jpg'
import StandImage from '../../../assets/prod_3.jpg'
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
        img: StandImage
    },
    {
        title: "სხვადასხვა",
        categ: "other",
        img: OtherImage
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
                                            sx={{
                                                height: { xs: "107vw", md: "37vw" }, overflow: "hidden",
                                                boxShadow: "0 0 50px 0.1px rgba(0,0,0,0.2)"
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