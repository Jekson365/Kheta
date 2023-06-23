import { Box, Container, Grid, Input, MenuItem, Select, TextareaAutosize, styled } from "@mui/material"
import { Product } from "../data/Products"
import { useState } from "react"
import axios from "axios"
import Items from "./Items"
import { CustomButton, MainColor } from "../Styles"

export const Admin = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [desc, setDesc] = useState("")
    const [category, setCat] = useState("")
    const [image, setImage] = useState<string>("")


    const handleSubmit = async (e: any) => {

        e.preventDefault()

        const objectToSend: Product = {
            title,
            price,
            desc,
            category,
            image,
            id: Math.floor(Math.random() * 100000000)
        }

        console.log(objectToSend)

        await axios.post("http://localhost:8080/products/postall", objectToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        location.reload()


    }
    return (

        <>
            <Container
                maxWidth={'xl'}
                style={{ "marginTop": "100px" }}
            >
                <h1>პროდუქციის დამატება</h1>
                <form encType="multipart/form-data">
                    <Box mt={5}>
                        <Grid container columns={12} flexDirection={'column'} rowSpacing={4}>
                            <Grid item xs={12} md={6}>
                                <CustomInput placeholder="დასახელება" fullWidth onChange={(e) => setTitle(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomInput placeholder="ფასი" fullWidth onChange={(e: any) => setPrice(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Select
                                    onChange={(e: any) => setCat(e.target.value)}
                                    sx={{ 'width': "100%", border: "1px solid black" }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={25}
                                    label="Age"
                                >
                                    <MenuItem value={'stand'}>სტენდი</MenuItem>
                                    <MenuItem value={'clock'}>საათი</MenuItem>
                                    <MenuItem value={'other'}>სხვადასხვა</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <CustomTextArea placeholder="აღწერა"
                                    onChange={(e: any) => setDesc(e.target.value)}
                                    minRows={5}></CustomTextArea>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <input
                                    accept="image/*"
                                    onChange={(e: any) => setImage(e.target.files[0])}
                                    type="file"
                                    name='image'
                                    placeholder="აირჩიე სურათი"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButton
                                    sx={{ 'background': MainColor, color: "white" }}
                                    onClick={handleSubmit}>გაგზანა</CustomButton>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
                <Box mt={5}>
                    <Items />
                </Box>
            </Container>
        </>
    )
}

const CustomTextArea = styled(TextareaAutosize)({
    width: "100%",
    fontSize: "20px",
    padding: "10px"
})


const CustomInput = styled(Input)({
    border: "1px solid gray",
    borderRadius: "4px",
    padding: "10px 20px",
})
