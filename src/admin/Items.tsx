import { Box, Button, Grid, Typography } from "@mui/material"
import axios from "axios"
import { useContext } from "react"
import { MainData } from "../App"


const Items = () => {

    const data = useContext(MainData)

    const deleteItem = async (id: string) => {
        if (localStorage.getItem("token")) {
            await axios.delete(`http://localhost:8080/products/delete/${id}`).then(() => console.log("deleted"))
            location.reload()
        }
    }

    return (
        <>
            <Grid container columns={12} spacing={3}>
                {data && data.map((each: any) => {
                    return (
                        <>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box
                                    sx={{ "overflow": "hidden" }}
                                >
                                    <Box height={'300px'} sx={{ "overflow": "hidden" }}>
                                        <img

                                            style={{ "objectFit": "cover", width: "100%", 'height': "100%" }}
                                            src={"http://localhost:8080" + each.image.toString()} />
                                    </Box>
                                    <Typography variant="h5">{each.title}</Typography>
                                    <Button
                                        onClick={() => deleteItem(each._id)}
                                        sx={{ 'background': "red", color: "white", marginTop: "10px", "&:hover": { background: "red" } }}>წაშლა</Button>
                                </Box>
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}

export default Items