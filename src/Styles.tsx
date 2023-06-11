import { AppBar, styled, Typography, Box, Button } from '@mui/material'

export const MainColor = '#1d3525'


export const CustomNavbar = styled(AppBar)({
    background: "white",
    boxShadow: "none",
    padding: "5px"
})

export const CustomNavItem = styled(Typography)({
    color: MainColor,
    fontSize: "18px"
})

export const CustomTitle = styled(Typography)({
    color: MainColor,
    fontSize: "34px"
})

export const CustomTitlePlace = styled(Box)({
    'width': "100%",
    height: "100%",
    display: "flex",
    alignItems: 'flex-end',
    justifyContent: "space-between"
})

export const CustomButton = styled(Button)({
    background: "white",
    color: MainColor,
    borderRadius: "25px",
    padding: "10px 40px",
    "&:hover": {
        background: "white"
    }
})
export const ReviewBox = styled(Box)({
    background: 'white'
})

export const ShopAllButton = styled(Button)({
    border: `1px solid ${MainColor}`,
    color: MainColor,
    padding: "0 30px",
    height: "40px",
    borderRadius: "40px",
    textTransform: "capitalize",
    fontFamily: "sans-serif !important"
})

export const CatButton = styled(Button)({
    width: "90%",
    border: `1px solid ${MainColor}`,
    color: MainColor,
    padding: "0 30px",
    background: "white",
    height: "40px",
    borderRadius: "40px",
    textTransform: "capitalize",
    '&:hover': {
        background: "white",
    }
})

export const CustomOverlay = styled(Box)({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(1,1,1,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
})