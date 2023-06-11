import { Container, Grid, Stack, Typography } from "@mui/material"


import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const priors = [
    {
        title: "მაღალი ხარისხი",
        icon: <AutoAwesomeIcon sx={{ "fontSize": "150px",color:"#1d3525" }} />
    },
    {
        title: "სწრაფი მიტანის სერვისი",
        icon: <AccessTimeIcon sx={{ "fontSize": "150px",color:"#1d3525" }} />
    },
    {
        title: "მიწოდება ნებისმიერ ადგილზე",
        icon: <LocalShippingIcon sx={{ "fontSize": "150px",color:"#1d3525" }} />
    },
]


const Priors = () => {
    return (
        <>
            <Container
                sx={{"marginTop":"100px",background:"#fcf8f3",padding:"20px 0"}}
                maxWidth={'xl'}
            >
                <Stack direction={'column'} alignItems={'center'}>
                    <Typography variant="h3" color={'#1d3525'} sx={{"fontSize":{xs:"33px",md:"45px"}}}>გპირდებით</Typography>
                </Stack>
                <Grid container columns={12} display={'flex'}>
                    {priors.map((each) => {
                        const { title, icon } = each
                        return (
                            <>
                                <Grid item xs={12} md={4}>
                                    <Stack
                                        textAlign={'center'}
                                        sx={{height:{xs:"300px",md:'400px'}}}
                                        direction={'column'} 
                                        justifyContent={'center'}
                                        alignItems={'center'}>
                                        <Typography variant="h5" color={'#1d3525'}>{title}</Typography>
                                        <Typography>{icon}</Typography>
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