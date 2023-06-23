import { CircularProgress, Container, Grid, Grow, Stack, Typography } from "@mui/material"
import { Product } from "../../data/Products"
import { Products as ProdItems } from "../../data/Products"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProdItem from "../../components/ProdItem"
import { MainColor } from "../../Styles"



const Products = () => {
    const [filter] = useState<String>(window.location.href.split("/")[4].toString() || '')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const red = (loc: String) => {
        window.location.href = `/products/${loc}`

    }
    return (
        <>
            <Container
                maxWidth={'xl'}
                style={{ "marginTop": "100px" }}
            >
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Stack
                            direction={'column'}
                            position={'sticky'}
                            bgcolor={MainColor}
                            pl={3}
                            color={'white'}
                            pt={3}
                            pr={3}
                            mr={3}
                            height={'80vh'}
                            sx={{ top: { xs: "0px", md: "116px" } }}
                            gap={"20px"}
                            alignItems={'flex-start'}>
                            <Link to={`/products/all`}
                                onClick={() => red('all')}>
                                <Typography>ყველა</Typography>
                            </Link>
                            <Link to={`/products/stand`} onClick={() => red('stand')}>
                                <Typography>ღვინის სტენდი</Typography>
                            </Link>
                            <Link to={'/products/clock'} onClick={() => red('clock')}>
                                <Typography>საათები</Typography>
                            </Link>
                            <Link to={'/products/other'} onClick={() => red('other')}>
                                <Typography>სხვადასხვა</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={9} columns={12} container spacing={2}
                        sx={{ marginTop: { xs: "20px", md: "0" } }}
                    >
                        {ProdItems && ProdItems
                            .filter((prod: Product) => filter == 'all' ? ProdItems : prod.category === filter)
                            .map((each: Product) => {

                                return (
                                    <>
                                        <Grow
                                            in={true}
                                            style={{ transformOrigin: '0% 50%' }}
                                            {...(true ? { timeout: 1000 } : {})}

                                        >
                                            <Grid xs={12} sm={6} md={4} item>
                                                <Link to={`/product/${each.id}`}>
                                                    {each ? <ProdItem prod={each} h={'110vw'} /> : <CircularProgress />}
                                                </Link>
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