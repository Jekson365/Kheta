import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { ShopAllButton } from "../../../Styles"
import { Link } from "react-router-dom"

const IMG1 = 'https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306124254_155775357081308_6428750173462444642_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=zNZO0gKGpngAX9-dQ6b&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCLmZzHCcabF7xnbglcKoJEY0G2b5qUQwtj1TYCwbf0_g&oe=6488CA93'

const Trending = () => {
    const x = [
        'https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/306077067_155039750488202_4906407192959133235_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=5JuyO5srQlMAX8JwRZT&_nc_oc=AQkHYjvbCBsAB-CccXUJXMD52GnCE4nudfqzT_-YueKa9E8vfrGKzK7EAnVPgUbnsH691aIFweTHchE_N-3iEOvl&_nc_ht=scontent.fkut1-1.fna&oh=00_AfC9lWFtyPFmGJ2ee6nKWf2MTNlLlfK8gzV_pq2KNJ__Yg&oe=64895E21',
        "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/308468482_158332136825630_2366041998808915677_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZkksjoAu-00AX95tIqF&_nc_oc=AQlgKjbDavRzW2zyL1USNSd0FvAoVzZqYyBBqZl6-IgM5RIKVujipLk0kT7bxryLAqMSgZqstrvMLSol9SUTLzxR&_nc_ht=scontent.fkut1-1.fna&oh=00_AfDTBu7wxJi09knPNuI4fzD2P4Ex6hKGImb-hzpuQtD9mA&oe=6489D3D7",
        'https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/308606869_158549750137202_316232749334461551_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bRTpucTX53AAX_-Y7qn&_nc_ht=scontent.fkut1-1.fna&oh=00_AfA2dtKjP5RMoi6WDkjIhFWjMjt0U4y2HY-aFIrKXDDH2A&oe=648998E5',
        "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/309271131_159064826752361_84180035499281397_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=sJ-TIZ48duAAX-Mhies&_nc_ht=scontent.fkut1-1.fna&oh=00_AfAslpmlIfI7gKuRXbTjRGwgP3I6VcBP5tfORxq5qe3e4Q&oe=648A2E83",
        "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/316415296_177843838232590_7207661610235231767_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EkJ1AXxYslwAX-bMH4s&_nc_ht=scontent.fkut1-1.fna&oh=00_AfB1ViXyV3PMckZrpxW1oKDuagw9Y0nDEWPwYQkfaeWfyA&oe=6489B8C4",
        "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/316406537_177909144892726_8023130198694103818_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=lR44dBeIPkgAX_Y1TIs&_nc_ht=scontent.fkut1-1.fna&oh=00_AfAbw_1c96soooVoPidSkFDCzgRbX-QOegL3WYGo6m5URA&oe=64897232"
    ]
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
                    <Link to={'/products/?type=all'}>
                        <ShopAllButton>პროდუქცია</ShopAllButton>
                    </Link>
                </Stack>
                <Grid container spacing={1} mt={3}>
                    <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
                        <Box

                            sx={{
                                "height": "90vh",
                                overflow: "hidden",
                                position: "sticky",
                                top: "0"
                            }}
                        >
                            <img src={IMG1} style={{ "objectFit": "cover", width: "100%", height: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container columns={12} spacing={1} rowSpacing={5}>
                            {x.map((each) => {
                                return (
                                    <Grid item xs={6}>
                                        <Box

                                            sx={{ overflow: "hidden", height: { xs: "59vw", md: "25vw" } }}
                                        >
                                            <img
                                                className="prod-image"
                                                src={each} style={{ "objectFit": "cover", width: "100%", height: "100%" }} />
                                        </Box>
                                        <Typography>
                                            ღვინის სტენდი
                                        </Typography>
                                        <Typography>120ლ</Typography>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Trending