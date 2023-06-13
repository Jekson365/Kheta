import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { IMG1 } from "../home/trending/Trending"
import { Buy, MainColor } from "../../Styles"

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { useEffect, useState } from "react";
import { Product, Products } from "../../data/Products";


function ProdPage() {
    const id = window.location.href.split("/")[4]

    const [prod] = useState(Products.filter((item: Product) => item.id == Number(id))[0])
    useEffect(() => { window.scrollTo(0, 0), console.log(id) }, [])
    const priors = [
        {
            title: "მაღალი ხარისხი",
            icon: <AutoAwesomeIcon sx={{ "fontSize": "50px", color: MainColor }} />
        },
        {
            title: "სწრაფი მიტანის სერვისი",
            icon: <AccessTimeIcon sx={{ "fontSize": "50px", color: MainColor }} />
        },
        {
            title: "მიწოდება ნებისმიერ ადგილზე",
            icon: <LocalShippingIcon sx={{ "fontSize": "50px", color: MainColor }} />
        },
    ]

    return (
        <>
            <Container
                maxWidth={"xl"}
                sx={{ "marginTop": "100px" }}
            >
                <Grid container columns={12}>
                    <Grid item xs={12} md={6}>
                        <div data-aos='fade-right' data-aos-duration='500'
                            style={{ "position": "sticky", "top": "0" }}
                        >

                            <Box

                                sx={{
                                    "width": { xs: "100%", md: "90%" },
                                    "height": { xs: "40vh", md: "80vh" },
                                    overflow: "hidden",
                                    position: "sticky",
                                    top: "0"
                                }}
                            >
                                <img src={prod.img.toString()}
                                    style={{ "objectFit": "cover", width: "100%", height: "100%" }} />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{paddingLeft:{xs:"0",md:"20px"}}}>
                        <Stack direction={'column'}
                        sx={{marginTop:{xs:"20px",md:"0"}}}
                        alignItems={'flex-start'}>
                            <Typography color={MainColor} variant="h4"
                                data-aos='fade-up'
                                data-aos-delay='100'
                            >{prod.title}</Typography>
                            <Box
                                bgcolor={MainColor}
                                width={'fit-content'}
                                mt={3}
                                pl={1}
                                pr={1}
                                color={'white'}
                                data-aos='fade-up'
                                data-aos-delay='200'
                            >
                                <Typography
                                    fontSize={'20px'}
                                >{prod.price} ლ</Typography>
                            </Box>
                            <Box
                                mt={3}
                                className="full-line">
                            </Box>
                            <Typography mt={3} color={MainColor}
                                data-aos='fade-up'
                                data-aos-delay='300'
                            >
                                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი გამოიყურება
                            </Typography>
                            <Buy
                                data-aos='fade-up'
                                data-aos-delay='400'
                            >
                                შეძენა
                            </Buy>
                            <Container
                                sx={{ "marginTop": "100px", background: "#fcf8f3", padding: "20px 0" }}
                                maxWidth={'xl'}
                            >
                                <Stack direction={'column'} alignItems={'center'}>
                                </Stack>
                                <Grid container columns={12} display={'flex'}
                                    data-aos='fade-up'
                                    data-aos-delay='500'
                                >
                                    {priors.map((each) => {
                                        const { title, icon } = each
                                        return (
                                            <>
                                                <Grid item xs={12} md={4}>
                                                    <Stack
                                                        textAlign={'center'}
                                                        sx={{ height: { xs: "200px", md: '200px' } }}
                                                        direction={'column'}
                                                        justifyContent={'center'}
                                                        alignItems={'center'}>
                                                        <Typography
                                                            data-aos='fade-up'
                                                            variant="h6" color={MainColor}
                                                            fontSize={"20px"}
                                                        >{title}</Typography>
                                                        <Typography
                                                            mt={5}
                                                        >{icon}</Typography>
                                                    </Stack>
                                                </Grid>
                                            </>
                                        )
                                    })}
                                </Grid>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ProdPage