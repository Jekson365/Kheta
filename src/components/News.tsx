import { Box, Stack, Typography } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import { MainColor } from "../Styles";

const News = () => {
  return (
    <>
      <Box
        bgcolor={MainColor}
      >
        <Stack
          color={'white'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          p={3}>
          <Typography variant="h5">გამოგვყევით სოციალურ ქსელში</Typography>
          <FacebookIcon sx={{'fontSize':"45px"}} />
        </Stack>
      </Box>
    </>
  )
}

export default News