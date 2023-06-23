import { Box, Container, Grid } from "@mui/material"
import { CustomOverlay } from "../../../Styles"

import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";

import post_1 from '../../../assets/posts/post_1.jpg'
import post_2 from '../../../assets/posts/post_2.jpg'
import post_3 from '../../../assets/posts/post_3.jpg'
import post_4 from '../../../assets/posts/post_4.jpg'



const Posts = () => {
    const arr = [
        {
            post: "https://www.facebook.com/photo/?fbid=241907561826217&set=pb.100080209240853.-2207520000.",
            img: post_1,
        },
        {

            post: "https://www.facebook.com/photo.php?fbid=229434753073498&set=pb.100080209240853.-2207520000.&type=3",
            img: post_3
        },
        {
            post: "https://www.facebook.com/photo/?fbid=228278003189173&set=pb.100080209240853.-2207520000.",
            img: post_2,
        },
        {
            post: "https://www.facebook.com/photo.php?fbid=231467899536850&set=pb.100080209240853.-2207520000.&type=3",
            img: post_4
        },
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