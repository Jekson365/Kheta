import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ShopAllButton } from "../../../Styles"
import { Link } from "react-router-dom"
import ProdItem from "../../../components/ProdItem"
import MinImage from '../../../assets/products/minCover.jpg'
import { Product, Products } from "../../../data/Products"
import { useContext } from "react"
import { MainData } from "../../../App"

export const IMG1 = MinImage

const Trending = () => {
    const data = useContext(MainData)
    return (
        <>
            <Container
                sx={{
                    "margin": "60px auto",
                }}
                maxWidth={"xl"}
            >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant="h3" sx={{ fontSize: { xs: "25px", sm: "45px" } }}>
                        პოპულარული პროდუქცია
                    </Typography>
                    <Link to={'/products'}>
                        <ShopAllButton>პროდუქცია</ShopAllButton>
                    </Link>
                </Stack>
                <Grid container spacing={1} mt={3}>
                    <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
                        <div data-aos='fade-right' data-aos-duration='500'
                            style={{ "position": "sticky", "top": "0" }}
                        >

                            <Box

                                sx={{
                                    "height": "90vh",
                                    overflow: "hidden",
                                    position: "sticky",
                                    top: "0"
                                }}
                            >

                                <img src={IMG1}
                                    style={{ "objectFit": "cover", width: "100%", height: "100%" }} />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container columns={12} spacing={1} rowSpacing={5}>
                            {data && data.slice(0, 7).map((each : Product) => {
                                return (
                                    <Grid item xs={6}>
                                        <div data-aos='fade-up' data-aos-duration='500'>
                                            <Link to={`/product/${each.id}`}>
                                                <ProdItem prod={each} h={'60vw'} />
                                            </Link>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid> 
            </Container >
        </>
    )
}

export default Trending