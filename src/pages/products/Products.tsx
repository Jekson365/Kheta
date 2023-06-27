import { CircularProgress, Container, Grid, Grow, Stack, Typography } from "@mui/material"
import { Product } from "../../data/Products"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ProdItem from "../../components/ProdItem"
import { MainColor } from "../../Styles"
import { MainData } from "../../App"



const Products = () => {

    const data = useContext(MainData)

    const [filter, setFilter] = useState<any>(data)

    useEffect(() => {
        window.scrollTo(0, 0)
        showAll()
    }, [])

    const red = (loc: String) => {
        // window.location.href = `/products/${loc}`
        setFilter(data.filter((item: Product) => item.category == loc))
    }
    const showAll = () => {
        setFilter(data)
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
                            sx={{ top: { xs: "0px", md: "116px" }, cursor: "pointer" }}
                            gap={"20px"}
                            alignItems={'flex-start'}>
                            <Typography
                                onClick={() => showAll()}>
                                <Typography>ყველა</Typography>
                            </Typography>
                            <Typography onClick={() => red('stand')}>
                                <Typography>ღვინის სტენდი</Typography>
                            </Typography>
                            <Typography onClick={() => red('clock')}>
                                <Typography>საათები</Typography>
                            </Typography>
                            <Typography onClick={() => red('other')}>
                                <Typography>სხვადასხვა</Typography>
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={9} columns={12} container spacing={2}
                        sx={{ marginTop: { xs: "20px", md: "0" } }}
                    >
                        {filter && filter
                            // .filter((prod: Product) => filter == 'all' ? ProdItems : prod.category === filter)
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