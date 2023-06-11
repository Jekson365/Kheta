import { Box, Container, Grid, Grow, Stack, Typography } from "@mui/material"
import { Product } from "../../data/Products"
import { Products as ProdItems } from "../../data/Products"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Products = () => {
    const URL = new URLSearchParams(window.location.search)
    const [filter] = useState<String>(URL.get('type') || '')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const red = (loc: String) => {
        window.location.href = `/products/?type=${loc}`
    }

    return (
        <>
            <Container
                maxWidth={'xl'}
                style={{ "marginTop": "100px" }}
            >
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Stack direction={'column'}
                            gap={"20px"}
                            alignItems={'flex-start'}>
                            <Link to={`/products/?type=all`} onClick={() => red('all')}>
                                <Typography>ყველა</Typography>
                            </Link>
                            <Link to={`/products/?type=stand`} onClick={() => red('stand')}>
                                <Typography>ღვინის სტენდი</Typography>
                            </Link>
                            <Link to={'/products/?type=clock'} onClick={() => red('clock')}>
                                <Typography>საათები</Typography>
                            </Link>
                            <Link to={'/products/?type=other'} onClick={() => red('other')}>
                                <Typography>სხვადასხვა</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={9} columns={12} container spacing={2}
                        sx={{ marginTop: { xs: "20px", md: "0" } }}
                    >
                        {ProdItems
                            .filter((prod: Product) => filter == 'all' ? ProdItems : prod.category === filter)
                            .map((each: Product) => {
                                const { title, img, price } = each
                                return (
                                    <>
                                        <Grow
                                            in={true}
                                            style={{ transformOrigin: '0% 50%' }}
                                            {...(true ? { timeout: 1000 } : {})}

                                        >
                                            <Grid xs={12} sm={6} md={4} item>
                                                <Box
                                                    sx={{ height: { xs: "110vw", sm: "50vw", md: "25vw" } }}
                                                    overflow={'hidden'}
                                                >
                                                    <img
                                                        className="prod-image"
                                                        style={{ "width": "100%", 'height': "100%", 'objectFit': "cover" }}
                                                        src={img.toString()}
                                                    />
                                                </Box>
                                                <Typography>
                                                    {title}
                                                </Typography>
                                                <Typography>{price}ლ</Typography>
                                            </Grid>
                                        </Grow>
                                    </>
                                )
                            })}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Products