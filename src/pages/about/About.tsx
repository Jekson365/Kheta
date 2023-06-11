import { Box, Container, Stack, Typography } from "@mui/material"
import RowOne from "./row/RowOne"


export const About = () => {
    return (
        <>
            <Container
                maxWidth={'xl'}
                style={{ "marginTop": "100px" }}
            >
                <Stack gap={'80px'} direction={'column'} alignItems={'center'}>
                    <Typography variant="h3">
                        ჩვენს შესახებ
                    </Typography>
                    <Typography
                        textAlign={'center'}
                        width={'100%'}
                    >
                        შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი გამოიყურება
                    </Typography>
                    <Box
                        overflow={'hidden'}
                    >
                        <img
                            style={{ "width": "100%", 'height': "100%", 'objectFit': "cover" }}
                            src={'https://assets.website-files.com/64465344f3421b4aa3952ede/644fc1c4a8ce0832b1786e2c_woman-looking-at-abstract-ainting.webp'} />
                    </Box>
                </Stack>
                <RowOne />
            </Container>
        </>
    )
}