import { Box, Container, Grid } from "@mui/material"
import { CustomOverlay } from "../../../Styles"

import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";


const Posts = () => {
    const arr = [
        {
            post: "https://www.facebook.com/photo?fbid=257715223578784&set=a.172222448794729",
            img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/331411994_1766041903865746_7221064381465210290_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=x8d2jZodyakAX-SyEje&_nc_ht=scontent.fkut1-1.fna&oh=00_AfDlN4qgE9fqjRZeFaQHhHmPjPWF7DSbVOwcQfVMGk7rUQ&oe=64892D88"
        },
        {
            post: "https://www.facebook.com/photo?fbid=241907561826217&set=a.172222452128062",
            img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/344386676_1022484125380600_770162951605324429_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=_0KMKoItsu0AX8MQphu&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBH-4zwWt5AhKMD9mBvq8bYM_Bxt-PDzgoKPYjTWv1_cA&oe=648A034F"
        },
        {
            post: "https://www.facebook.com/photo?fbid=235313059152334&set=a.172222452128062",
            img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/342520134_766931264845606_1773532762147200629_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=VSGv4iuSC2wAX91cFOU&_nc_ht=scontent.fkut1-1.fna&oh=00_AfCZdSg_v7DkLIZgqVhwMuvCrfLkAy2TMfAhD0EFmPwhhQ&oe=648941E7"
        },
        {
            post: "https://www.facebook.com/photo?fbid=232809216069385&set=a.172222452128062",
            img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/341164543_1110370179663579_50550877232728175_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=dHtTnwZFsRkAX9la8WN&_nc_ht=scontent.fkut1-1.fna&oh=00_AfBQRMjYVrHYhBY5rRGQaA5Df2Ayg4mQPCUAMW2F6Qj7Hg&oe=648A1033"
        }
    ]

    return (
        <>
            <Container
                maxWidth={'xl'}
                sx={{ "marginTop": "50px" }}
            >
                <Grid container columns={12} spacing={1}>
                    {arr.map((each) => {
                        return (
                            <>
                                <Grid item xs={6} md={3}>
                                    <Link to={each.post}>
                                        <Box
                                            overflow={'hidden'}
                                            position={'relative'}
                                            className="dsadssdas"
                                            sx={{ width: { xs: "46vw", md: "auto" }, height: { xs: "46vw", md: 'auto' } }}

                                        >
                                            <CustomOverlay className="dasda">
                                                <FacebookIcon sx={{ "fontSize": "50px" }} />
                                            </CustomOverlay>
                                            <img
                                                width={'100%'}
                                                height={'100%'}
                                                src={each.img} />
                                        </Box>
                                    </Link>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default Posts