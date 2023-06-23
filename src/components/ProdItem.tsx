import { Box, Typography } from "@mui/material"
import { Product } from "../data/Products"
import { MainColor } from "../Styles"


const ProdItem = ({ prod, h }: { prod: Product, h: String }) => {
    const { title, image, price }: any = prod
    return (
        <>
            <Box
                sx={{ height: { xs: h.toString(), sm: "50vw", md: "25vw" }, borderRadius: "3px" }}
                overflow={'hidden'}
            >
                <img
                    className="prod-image"
                    style={{ "width": "100%", 'height': "100%", 'objectFit': "cover" }}
                    src={`http://localhost:8080${image}`}
                />
            </Box>
            <Box
                mt={1}
            >
                <Typography fontSize={"25px"}>
                    {title} - {prod.category}
                </Typography>
                <Box
                    bgcolor={MainColor}
                    width={'fit-content'}
                    mt={1}
                    pl={1}
                    pr={1}
                    color={'white'}>
                    <Typography>{price}ლ</Typography>
                </Box>
            </Box>
        </>
    )
}

export default ProdItem