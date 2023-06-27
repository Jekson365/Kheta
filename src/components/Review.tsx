
import { MainColor, ReviewBox } from '../Styles'
import { Rating, Stack, Typography } from '@mui/material'



export const Review = () => {
    return (
        <>
            <ReviewBox p={2}>
                <Stack direction='column' gap={'10px'}>
                    <Stack direction={'row'} justifyContent={''}>
                        <Rating
                            name="simple-controlled"
                            value={5}
                            readOnly
                            color='#1d3525'
                            sx={{ "color": MainColor, fontSize: "15px", gap: "5px" }}
                        />
                    </Stack>
                    <Typography variant='h5' color={MainColor}
                        sx={{ fontSize: { xs: "20px" } }}
                    >
                      შევიძინე ვიოლინოს ბარი და ულამაზესია. ჩემი რეკომენტაცია ამ გვერდს! დიდი მადლობა
                    </Typography>
                    <Stack direction={'row'}>
                        <Typography fontSize={"13px"}>
                            ნინა სამხარაძე
                        </Typography>
                    </Stack>
                </Stack>
            </ReviewBox >

        </>
    )
}