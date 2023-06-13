import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ShopAllButton } from "../../../Styles"
import { Link } from "react-router-dom"
import ProdItem from "../../../components/ProdItem"
import { Products } from "../../../data/Products"

export const IMG1 = 'https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306124254_155775357081308_6428750173462444642_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=zNZO0gKGpngAX9-dQ6b&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCLmZzHCcabF7xnbglcKoJEY0G2b5qUQwtj1TYCwbf0_g&oe=6488CA93'

const Trending = () => {

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
                    <Link to={'/products/all'}>
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
                            {Products.slice(1, 7).map((each) => {
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