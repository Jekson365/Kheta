import { Container, Grid, Stack, Typography } from "@mui/material"


import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { MainColor } from "../../../Styles";


const priors = [
    {
        title: "მაღალი ხარისხი",
        icon: <AutoAwesomeIcon sx={{ "fontSize": "150px", color: MainColor }} />
    },
    {
        title: "სწრაფი მიტანის სერვისი",
        icon: <AccessTimeIcon sx={{ "fontSize": "150px", color: MainColor }} />
    },
    {
        title: "მიწოდება ნებისმიერ ადგილზე",
        icon: <LocalShippingIcon sx={{ "fontSize": "150px", color: MainColor }} />
    },
]


const Priors = () => {
    return (
        <>
            <Container
                sx={{ "marginTop": "100px", background: "#fcf8f3", padding: "20px 0" }}
                maxWidth={'xl'}
            >
                <Stack direction={'column'} alignItems={'center'}>
                    <Typography variant="h3" color={MainColor} sx={{ "fontSize": { xs: "33px", md: "45px" } }}>გპირდებით</Typography>
                </Stack>
                <Grid container columns={12} display={'flex'}>
                    {priors.map((each) => {
                        const { title, icon } = each
                        return (
                            <>
                                <Grid item xs={12} md={4}>
                                    <Stack
                                        textAlign={'center'}
                                        sx={{ height: { xs: "300px", md: '400px' } }}
                                        direction={'column'}
                                        justifyContent={'center'}
                                        alignItems={'center'}>
                                        <Typography variant="h5" color={MainColor}>{title}</Typography>
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
        </>
    )
}

export default Priors