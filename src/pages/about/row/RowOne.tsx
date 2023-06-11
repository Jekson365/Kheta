import { Box, Grid, Stack, Typography } from "@mui/material"


const RowOne = () => {
    return (
        <>
            <Grid

                container
                columns={12}
                mt={10}
                display={'flex'}
                alignItems={'center'}
                spacing={5}
            >
                <Grid xs={12} md={6} item>
                    <Stack
                        direction={'column'}
                        alignItems={'flex-start'}
                    >
                        <Typography variant="h4">
                            A world of captivating wall art
                        </Typography>
                        <Typography>
                            We don't have to be committed. We are just playing here.The little tiny Tim easels will let you down.

                            We might as well make some Almighty mountains today as well, what the heck. Maybe he has a little friend that lives right over here.By now you should be quite happy about what's happening here.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid xs={12} md={6} item>
                    <Box
                        height={'40vh'}
                        overflow={'hidden'}

                        sx={{height:{xs:'40vh',md:"90vh"}}}
                    >
                        <img
                            style={{ "width": "100%", 'height': "100%", 'objectFit': "cover" }}
                            src={'https://assets.website-files.com/64465344f3421b4aa3952ede/644fc35c92b38da67a9977d2_art-modern-painting-p-1080.webp'} />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default RowOne