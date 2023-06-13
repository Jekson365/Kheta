const MainImage = 'https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/311238212_161785356480308_5777257582633707832_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=KKcYggv3ZX0AX80XTRA&_nc_ht=scontent.fkut1-1.fna&oh=00_AfD_72s45Oo6OiDs81s7qtaHkVxRNE4x9diLKy0GiAFFWw&oe=6489D414'

import { Box, Grid, Typography } from '@mui/material'
import { CustomButton, CustomTitlePlace } from '../../Styles'
import { Review } from '../../components/Review'
import { Link } from 'react-router-dom'

export const Cover = () => {
    return (
        <>
            <Box

                sx={{
                    'backgroundImage': `url('${MainImage}')`,
                    'height': "90vh",
                    'width': "100%",
                    'backgroundSize': "cover",
                    padding: { xs: "20px", md: "0" }
                }}
            >
                <CustomTitlePlace>
                    <Grid
                        container
                        columns={12}
                        maxWidth={'xl'}
                        // width={'85%'}
                        margin={"0 auto"}
                        display={'flex'}
                        marginBottom={"40px"}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Grid xs={12} md={8} item>
                            <Typography
                                sx={{ 'fontSize': { xs: "25px", md: "55px" } }}
                                variant='h2'
                                mb={5}
                                color={'white'}

                            >
                                <div data-aos='fade-up' data-aos-duration="1000">
                                    ეკოლოგიურად სუფთა,ხისგან დამზადებული ნაკეთობები
                                </div>
                            </Typography>
                            <Link to={'/products/all'}>
                                <div data-aos='fade-up'>
                                    <CustomButton>
                                        ჩვენი პროდუქცია
                                    </CustomButton>
                                </div>
                            </Link>
                        </Grid>
                        <Grid xs={12} md={4} item sx={{ marginTop: { xs: '20px', md: "0" } }}>
                            <div data-aos='fade-left'>
                                <Review />
                            </div>
                        </Grid>
                    </Grid>
                </CustomTitlePlace>
            </Box>
        </>
    )
}